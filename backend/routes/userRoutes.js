import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  getUsers,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const authRouter = express.Router();

authRouter.route("/").get(protect, admin, getUsers);
authRouter.post("/register", registerUser);

authRouter.post("/login", authUser);
authRouter.post("/logout", logoutUser);
// authRouter.route;

export default authRouter;
