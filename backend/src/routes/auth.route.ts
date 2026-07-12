import { Router } from "express";

const auth = Router();

auth.post("/signup");

auth.post("/signin");

export default auth;
