import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

// Helper to generate token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

export const register = async (req, res) => {
  // ... (registration logic, create user)
  // On success, respond without token. Force login.
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password");

  if (user && (await user.comparePassword(password))) {
    const token = generateToken(user._id);
    res.json({
      token, // Send token to our Next.js proxy
      user: { id: user._id, email: user.email, favorites: user.favorites },
    });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};

export const getProfile = async (req, res) => {
  // req.user is attached by the 'protect' middleware
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
};
