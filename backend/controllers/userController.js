import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";
import Joi from "joi";
import { apiResponseCode } from "../helper.js";

// @desc Auth user & get token
// @route POST /api/auth/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
  const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  const { error } = loginSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      responseCode: apiResponseCode.BAD_REQUEST,
      responseMessage: "Invalid credentials",
      data: null,
    });
  }

  if (user && (await user.matchPassword(password)) == true) {
    generateToken(res, user._id);

    res.json({
      responseCode: apiResponseCode.SUCCESSFUL,
      responseMessage: `${email} login successfully`,
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        phoneNumber: user.phoneNumber,
        username: user.username,
      },
    });
  } else {
    res.status(401).json({
      responseCode: apiResponseCode.UNAUTHORIZED,
      responseMessage: "Invalid Email or Password",
      data: null,
    });
  }
});

// @desc Register a new user
// @route POST /api/auth/register
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const registerSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().min(8).required(),
  });

  const { name, email, password, phoneNumber, username } = req.body;

  const userExists = await User.findOne({ email });

  const { error } = registerSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      responseCode: apiResponseCode.BAD_REQUEST,
      responseMessage: error.details[0].message,
      data: null,
    });
  }

  const usernameExists = await User.findOne({ username });
  if (usernameExists) {
    return res.status(400).json({
      responseCode: apiResponseCode.BAD_REQUEST,
      responseMessage: `Username ${username} already exists`,
      data: null,
    });
  }

  if (userExists) {
    return res.status(400).json({
      responseCode: apiResponseCode.BAD_REQUEST,
      responseMessage: `${email} already exist`,
      data: null,
    });
  }

  const user = await User.create({
    name,
    email,
    password,
    username,
    phoneNumber,
  });

  if (user) {
    generateToken(res, user._id);

    res.status(201).json({
      responseCode: apiResponseCode.SUCCESSFUL,
      responseMessage: `${email} registered successfully`,
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        username: user.username,
        phoneNumber: user.phoneNumber,
      },
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc Logout user / clear cookie
// @route POST /api/users/logout
// @access Public
const logoutUser = (req, res) => {
  res.clearCookie("jwt");
  res.status(200).json({
    responseCode: apiResponseCode.SUCCESSFUL,
    responseMessage: "Logged out successfully",
  });
};

// @desc Get user profile
// @route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc Update user profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc Get all user
// @route GET /api/users
// @access Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

// @desc Delete user
// @route DELETE /api/users/:ID
// @access Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.remove();
    res.json("User removed");
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc Get user by ID
// @route GET /api/users/:id
// @access Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc Update user
// @route PUT /api/users/:id
// @access Private
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.isAdmin = req.body.isAdmin;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};
