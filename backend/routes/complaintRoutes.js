const express = require("express");
const Complaint = require("../models/Complaint");
const role = require("../middleware/roleMiddleware");
const { protect } = require("../middleware/authMiddleware");
const { uploadFileToCloudinary, multerMiddleware } = require("../config/cloudinaryConfig");
const { departmentProtect } = require("../middleware/departmentAuth");

const router = express.Router();

// @route POST /api/complaints
// @desc Create a new complaint
// @access Private/User
router.post("/", protect, role("user"), multerMiddleware, async (req, res) => {
  try {
    const { title, description, location, images } = req.body;

    if (!title || !description || !location) {
      return res.status(400).json({
        message: "Title, description and location are required",
      });
    }

    let imageUrl = "";

    if (req.file) {
      const upload = await uploadFileToCloudinary(req.file);

      imageUrl = upload.secure_url;
    }

    const complaint = new Complaint({
      title,
      description,
      location,
      images: imageUrl,
      user: req.user._id,
    });

    const saveComplaint = await complaint.save();

    res.status(201).json(saveComplaint);
  } catch (error) {
    res.status(500).json({ message: error.message || "Server Error" });
  }
});

// @route GET /api/complaints/my
// @desc Get user's complaints
// @access Private/User
router.get("/my", protect, role("user"), async (req, res) => {
  try {
    const complaint = await Complaint.find({ user: req.user._id })
      .populate("department")
      .sort({ createdAt: -1 });

    res.json(complaint);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
});

// @route GET /api/complaints
// @desc Get all complaints
// @access Private/Admin
router.get("/", protect, role("admin"), async (req, res) => {
  try {
    const complaints = await Complaint.find()
      .populate("user")
      .populate("department")
      .sort({ createdAt: -1 });

    res.json(complaints);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
});

// @route PUT /api/complaints/:id/assign
// @desc Assign complaint department
// @access Private/Admin
router.put("/:id/assign", protect, role("admin"), async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      return res.status(404).json({
        message: "Complaint not found",
      });
    }

    complaint.status = "assigned";

    const updatedComplaint = await complaint.save();

    res.json(updatedComplaint);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
});


//@route GET /api/complaints/department
//@desc Get complaints for logged in department
//@access Private/Department
router.get("/department", departmentProtect, async(req, res) => {
  try {
    const complaint = (await Complaint.find({ department: req.department._id}).populate("user")).toSorted({ createdAt: -1 });

    res.json(complaint);
  } catch (error) {
    res.status(500).json({
      message: "Server Errro"
    });
  }
})



// @route PUT /api/complaints/:id/status
// @desc Update complaint status
// @access Private/Department Admin
router.put("/:id/status", departmentProtect, async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      return res.status(404).json({
        message: "Complaint not found",
      });
    }

    if (complaint.department.toString() !== req.department._id.toString()) {
      return res.status(403).json({
        message: "Not your complaint"
      });
    }

    complaint.status = req.body.status;

    const updatedComplaint = await complaint.save();

    res.json(updatedComplaint);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;
