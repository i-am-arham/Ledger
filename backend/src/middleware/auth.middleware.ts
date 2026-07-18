import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import type { AuthPayload } from "../types/express.js";

export function authMiddelware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const token = req.cookies.token;

  if (!token)
    return res.status(401).json({
      message: "Unauthorized",
    });

  const secret = process.env.JWT_SECRET;

  if (!secret) {
    console.error("JWT_SECRET is not defined");

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }

  try {
    const payload = jwt.verify(token, secret) as AuthPayload;

    req.user = payload;

    next();
  } catch(error) {
    console.error(error);

    return res.status(401).json({
      message: "Invalid token",
    });
  }
}
