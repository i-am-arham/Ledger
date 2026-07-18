import type { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";

export async function getBalance(req: Request, res: Response) {
  const account = await prisma.account.findUnique({
    where: {
      userId: req.user!.id,
    },
  });

  if (!account) {
    return res.status(404).json({
      message: "Account not found",
    });
  }

  res.json({
    balance: account?.balance,
  });
}
