import { Router } from "express";
import { transferMoney } from "../controllers/transaction.route.js";
import { authMiddelware } from "../middleware/auth.middleware.js";

const transaction = Router();

transaction.post("/transfer", authMiddelware, transferMoney);
// transaction.get("/");
// transaction.get("/:id");

export default transaction;
