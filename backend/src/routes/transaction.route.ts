import { Router } from "express";

const transaction = Router();

transaction.post("/transfer");
transaction.get("/");
transaction.get("/:id");

export default transaction;
