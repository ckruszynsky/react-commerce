import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
  try {
    if (
      !req.headers.authorization &&
      !req.headers.authorization.startsWith("Bearer ")
    ) {
      res.status(401);
      throw new Error("No token provided");
    }

    const token = req.headers.authorization.replace("Bearer ", "");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");
    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: "Not authorized token failed." });
  }
});

export { protect };
