import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils.js/generateToken.js";
/**
 * @desc    authenticate user & get token
 * @route   POST /api/auth/login
 * @access  Public
 */
const authUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  // Check for user
  let user = await User.findOne({ email });
  if (!user) {
    throw new Error(`Invalid email or password`, 401);
  }
  if (user && (await user.validatePassword(password, user.password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    throw new Error(`Invalid email or password`, 401);
  }
});

export { authUser };
