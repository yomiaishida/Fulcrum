import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  getUsers,
  getUserProfile,
  updateUserProfile,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const authRouter = express.Router();

authRouter.route("/").get(protect, admin, getUsers);
authRouter.post("/register", registerUser);

authRouter.post("/login", authUser);
authRouter.post("/logout", logoutUser);
authRouter
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
authRouter
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

export default authRouter;
