import { Router } from "express";
import { authMiddelware } from "../middleware/auth.middleware.js";
import { getBalance } from "../controllers/account.controllers.js";

const account = Router();

account.get("/balance", authMiddelware, getBalance);

export default account;
