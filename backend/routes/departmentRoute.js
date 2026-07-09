const express = require("express");
const jwt = require("jsonwebtoken");
const Department = require("../models/Department");
const { protect } = require("../middleware/authMiddleware");
const dotenv = require("dotenv");
const role = require("../middleware/roleMiddleware");
const { departmentProtect } = require("../middleware/departmentAuth");

dotenv.config();

const router = express.Router();

// @route POST /api/departments/register
// @desc Create/Register Department
// @access Private/Admin
router.post("/register", protect, role("admin"), async (req, res) => {
  try {
    const { name, email, password, phone, address, description } = req.body;

    if (!name || !email || !password || !phone || !address) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existDepartment = await Department.findOne({
      $or: [{ email }, { name }],
    });

    if (existDepartment) {
      return res.status(400).json({
        success: false,
        message: "Department already exists",
      });
    }

    const department = new Department({
      name,
      email,
      password,
      phone,
      address,
      description,
    });

    await department.save();

    res.status(201).json({
      success: true,
      message: "Department registered successfully",
      department,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Server Error",
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
      success: true,
      department: {
        _id: department._id,
        name: department.name,
        email: department.email,
        phone: department.phone,
        address: department.address,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});


// @route GET /api/departments
// @desc Get all Departments
// @access public
router.get("/", async (req, res) => {
  try {
    const departments = await Department.find({ status: "active" }, "name").sort({ name: 1 });

    res.status(200).json({
      success: true,
      count: departments.length,
      departments,
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    })
  }
})


// @route GET api/departments/profile
// @desc Get logged in department profile
// @access Private
router.get("/profile", departmentProtect, async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      department: req.department,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
});

module.exports = router;
