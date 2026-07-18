import { Router } from "express";
import { userSignIn, userSignUp } from "../controllers/auth.controllers.js";

const auth = Router();

auth.post("/signup", userSignUp);

auth.post("/signin", userSignIn);

export default auth;


