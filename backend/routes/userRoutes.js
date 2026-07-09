const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { protect } = require("../middleware/authMiddleware");
const { OAuth2Client } = require("google-auth-library");

const router = express.Router();

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// @route POST /api/users/register
// @desc Register a new user
// @access public

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Registration Logic
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email and password are required",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters",
      });
    }
    let user = await User.findOne({ email });

    if (user) return res.status(400).json({ message: "User already exists" });

    user = new User({
      name,
      email,
      password,
    });
    await user.save();

    // Create JWT Payload
    const payload = {
      user: { id: user._id, role: user.role, department: user.department },
    };

    // Sign and return the token along with user data
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "40h",
    });

    // send the user and token in response
    res.status(201).json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        department: user.department,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

// @route POST /api/users/login
// @desc Authenticate user
// @access Public

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Email and password are required" });
    }

    // Find the uesr by email
    let user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: "Invalid Credentials" });

    const isMatch = await user.matchPassword(password);

    if (!isMatch)
      return res.status(400).json({ message: "Invalid Credentials" });

    // Create JWT Payload
    const payload = {
      user: { id: user._id, role: user.role, department: user.department },
    };

    // Sign and return the token along with user data
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "40h",
    });

    // send the user and token in response
    res.json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        department: user.department,
      },
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// @desc    Get current user
// @route   GET /api/auth/me
// @access Private

router.get("/me", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    return res.json({ success: true, data: user });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// @desc update profile (name, phone, avatar)
// @route PUT /api/auth/profile
// @access private
router.put("/profile", protect, async (req, res) => {
  try {
    const { name, phone, avatar } = req.body;
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (typeof name === "string" && name.trim()) user.name = name.trim();
    if (typeof phone === "string") user.phone = phone.trim();
    if (typeof avatar === "string") user.avatar = avatar.trim();

    await user.save();
    res.json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// @desc    Change password
// @route   PUT /api/auth/password
// @access private
router.put("/password", protect, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    if (!currentPassword || !newPassword) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Current and new password are required",
        });
    }

    if (newPassword.length < 6) {
      return res
        .status(400)
        .json({
          success: false,
          message: "New password must be at least 6 characters",
        });
    }

    const user = await User.findById(req.user.id).select("+password");
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const isMatch = await user.matchPassword(currentPassword);
    if (!isMatch) {
      return res
        .status(404)
        .json({ success: false, message: "Current password is incorrect" });
    }

    user.password = newPassword;
    await user.save();
    res.json({ success: true, message: "Password updated successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// @desc connect with Google Account
// @route POST /api/users/google
// @access public
router.post("/google", async (req, res) => {
  const { token } = req.body;
  try {
    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Google token is required",
      });
    }

    // Verify Google ID Token
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    const { sub: googleId, email, name, picture } = payload;

    // Check if user already exists
    let user = await User.findOne({ email });

    if (!user) {
      // Create new Google user
      user = await User.create({
        name,
        email,
        avatar: picture,
        googleId,
        authProvider: "google",
        role: "user",
      });
    } else {
      
      if (user.role !== 'user') {
        return res.status(403).json({
          success: false,
          message: "Google login is available only for users.",
        })
      }
    }

    // Google account link
    if (!user.googleId) {
      user.googleId = googleId;
      user.avatar = picture;
      user.authProvider = "google";

      await user.save();
    }

    // Create JWT Payload
    const jwtPayload = {
      user: {
        id: user._id,
        role: user.role,
      },
    };

    // Generate JWT
    const jwtToken = jwt.sign(jwtPayload, process.env.JWT_SECRET, {
      expiresIn: "40h",
    });

    // Response
    return res.status(200).json({
      success: true,
      message: "Google Login Successful",
      token: jwtToken,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        role: user.role,
        department: user.department,
      },
    });
  } catch (error) {
    console.error("Google Login Error", error);
    return res.status(500).json({
      success: false,
      message: "Google authentication failed",
    });
  }
});

module.exports = router;
