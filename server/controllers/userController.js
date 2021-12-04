import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils.js/generateToken.js";

/**
 * @desc    Get user profile
 * @route   GET /api/users/profile
 * @access  Private
 * @returns {object} 200 - User object
 * @returns {object} 400 - Invalid token
 * @returns {object} 500 - Server error
 * @returns {object} 404 - User not found
 * @returns {object} 401 - Unauthorized
 * @returns {object} 403 - Forbidden
 */
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
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

/**
 * @desc    register a new user
 * @route   POST /api/users
 * @access  Public
 */
const registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;
  // Check for user
  let user = await User.findOne({ email });
  if (user) {
    res.status(400);
    throw new Error("User already exists");
  }
  const newUser = await User.create({
    name,
    email,
    password,
  });

  if (newUser) {
    res.status(201);
    res.json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      token: generateToken(newUser._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});

export { getUserProfile, registerUser };
