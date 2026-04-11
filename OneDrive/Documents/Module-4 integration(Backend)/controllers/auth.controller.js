const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const loginController = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const payload = {
    userId: user._id,
    username: user.username
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "2h"
  });

  // ✅ IMPORTANT: HttpOnly Cookie
  res.cookie("token", token, {
    httpOnly: true,
    secure: false, // true in production
    sameSite: "Strict"
  });

  res.status(200).json({ message: "Login successful" });
};

module.exports = { login };