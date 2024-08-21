import express from "express";
import { authUser, registerUser } from "../controllers/userController.js";

const authRouter = express.Router();

authRouter.post("/register", registerUser);

authRouter.post("/login", authUser);

export default authRouter;
