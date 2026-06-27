const express = require("express");
const jwt = require("jsonwebtoken");
const Department = require("../models/Department");
const { protect } = require("../middleware/authMiddleware");
const dotenv = require("dotenv");
const role = require("../middleware/roleMiddleware");
const {departmentProtect} = require("../middleware/departmentAuth")

dotenv.config();

const router = express.Router();

// @route POST /api/departments/register
// @desc Create/Register Department
// @access Private/Admin
router.post("/register", protect, role("admin"), async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    const existDepartment = await Department.findOne({ email });

    if (existDepartment) {
      return res.status(400).json({
        message: "Department already exists",
      });
    }

    const department = new Department({
      name,
      email,
      password,
      phone,
      address,
    });

    await department.save();

    res.status(201).json({
      message: "Department created successfully",
      department,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
});

// @route POST /api/departments/login
// @desc Department Login
// @access Public
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const department = await Department.findOne({ email });

    if (!department) {
      return res.status(400).json({
        message: "Invalid Creadentials",
      });
    }

    const isMatch = await department.matchPassword(password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Creadentials",
      });
    }

    const token = jwt.sign(
      { department: { id: department._id, name: department.name } },
      process.env.JWT_SECRET,
      { expiresIn: "40h" },
    );

    res.json({
      department: {
        _id: department._id,
        name: department.name,
        email: department.email,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
});

// @route GET api/departments/profile
// @desc Get logged in department profile
// @access Private
router.get("/profile", departmentProtect, async (req, res) => {
  res.json(req.department);
});

module.exports = router;
