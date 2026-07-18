import type { Request, Response } from "express";
import { prisma, IdempotencyStatus } from "../lib/prisma.js";
import type { Prisma } from "@prisma/client/extension";

export async function transferMoney(req: Request, res: Response) {
  const senderId = req.user!.id;
  const { receiverId, amount } = req.body;

  const key = req.header("Idempotency-Key");

  if (!key)
    return res.status(400).json({
      message: "Missing Idempotency-Key",
    });

  try {
    const existingKey = await prisma.idempotencyKey.findUnique({
      where: {
        key,
      },
      include: {
        transaction: true,
      },
    });

    if (existingKey) {
      return res.json({
        message: "Already processed",
        transaction: existingKey.transaction,
      });
    }

    const transaction = await prisma.$transaction(async (tx : Prisma.TransactionClient)  => {
      await tx.idempotencyKey.create({
        data: {
          key,
          userId: senderId,
          status: IdempotencyStatus.PENDING,
        },
      });

      const sender = await tx.account.findUnique({
        where: {
          userId: senderId,
        },
      });

      if (!sender) throw new Error("Sender account not found");

      if (sender.balance < amount) throw new Error("Insufficient balance");

      await tx.account.update({
        where: {
          userId: senderId,
        },
        data: {
          balance: {
            decrement: amount,
          },
        },
      });

      await tx.account.update({
        where: {
          userId: receiverId,
        },
        data: {
          balance: {
            increment: amount,
          },
        },
      });

      const createdTransaction = await tx.transaction.create({
        data: {
          senderId,
          receiverId,
          amount,
        },
      });

      await tx.idempotencyKey.update({
        where: {
          key,
        },
        data: {
          status: IdempotencyStatus.SUCCESS,
          transactionId: createdTransaction.id,
        },
      });

      return createdTransaction;
    });

    res.status(201).json(transaction);
  } catch (error) {
    await prisma.idempotencyKey.updateMany({
      where: {
        key,
      },
      data: {
        status: IdempotencyStatus.FAILED,
      },
    });

    res.status(400).json({
      message: error instanceof Error ? error.message : "Transfer failed",
    });
  }
}



