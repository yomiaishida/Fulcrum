import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
} from "../controllers/userController.js";

const authRouter = express.Router();

authRouter.post("/register", registerUser);

authRouter.post("/login", authUser);
authRouter.post("/logout", logoutUser);

export default authRouter;
