const express = require("express");
const Complaint = require("../models/Complaint");
const role = require("../middleware/roleMiddleware");
const { protect } = require("../middleware/authMiddleware");
const {
  uploadFileToCloudinary,
  multerMiddleware,
} = require("../config/cloudinaryConfig");
const { departmentProtect } = require("../middleware/departmentAuth");

const router = express.Router();

// @route POST /api/complaints
// @desc Create a new complaint
// @access Private/User
router.post("/", protect, role("user"), multerMiddleware, async (req, res) => {
  try {
    const {
      department,
      title,
      description,
      priority,
      province,
      district,
      municipality,
      ward,
      tole,
      latitude,
      longitude,
    } = req.body;

    if (
      !title ||
      !description ||
      !province ||
      !district ||
      !municipality ||
      !ward ||
      !tole ||
      !latitude ||
      !longitude ||
      !department
    ) {
      return res.status(400).json({
        message: "All required fields must be provided",
      });
    }

    // Generate Complaint ID
    const complaintId = `SCP-${new Date().getFullYear()}-${Date.now()}`;

    // Upload Imaged
    let images = [];

    if (req.files && req.files.length > 0) {
      for (const file of req.files) {
        const upload = await uploadFileToCloudinary(file);

        images.push({
          url: upload.secure_url,
          publicId: upload.public_id,
          altText: title,
        });
      }
    }

    const complaint = await Complaint.create({
      complaintId,
      user: req.user._id,
      department,
      title,
      description,
      priority,
      images,
      location: {
        province,
        district,
        municipality,
        ward,
        tole,
        latitude,
        longitude,
      },
    });

    res.status(201).json({
      success: true,
      message: "Complaint submitted successfully.",
      complaint,
    });
  } catch (error) {
    res.status(500).json({ message: error.message || "Server Error" });
  }
});

// @route GET /api/complaints/my
// @desc Get user's complaints
// @access Private/User
router.get("/my", protect, role("user"), async (req, res) => {
  try {
    const complaints = await Complaint.find({ user: req.user._id })
      .populate("department", "name email phone")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: complaints.length,
      complaints,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
});

// @route GET /api/complaints
// @desc Get all complaints
// @access Private/Admin
router.get("/", protect, role("admin"), async (req, res) => {
  try {
    const complaints = await Complaint.find()
      .populate("user", "name email phone")
      .populate("department", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: complaints.length,
      complaints,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
});

//@route GET /api/complaints/department
//@desc Get complaints for logged in department
//@access Private/Department
router.get("/department", departmentProtect, async (req, res) => {
  try {
    const complaint = await Complaint.find({ department: req.department._id })
      .populate("user", "name email phone")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: complaint.length,
      complaints,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
});

// @route PUT /api/complaints/:id/status
// @desc Update complaint status
// @access Private/Department Admin
router.put("/:id/status", departmentProtect, async (req, res) => {
  try {
    const { status, resolutionNote } = req.body;

    const complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      return res.status(404).json({
        success: false,
        message: "Complaint not found",
      });
    }

    if (complaint.department.toString() !== req.department._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Not your complaint",
      });
    }

    complaint.status = status;

    if (resolutionNote) {
      complaint.resolutionNote = resolutionNote;
    }

    if (status === "resolved") {
      complaint.reslovedAt = new Date();
    }

    await complaint.save();

    res.status(200).json({
      success: true,
      message: "Complaint updated successfully",
      complaint,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
});

// @route GET /api/complaints/:complaintId
// @desc Track complaint by complaint ID
// @access private/user
router.get("/track/:complaintId", protect, role("user"), async (req, res) => {
  try {
    const { complaintId } = req.params;

    const complaint = await Complaint.findOne({
      complaintId,
      user: req.user._id,
    })
      .populate("department", "name email phone")
      .populate("user", "name email phone");

    if (!complaint) {
      return res.status(404).json({
        success: false,
        message: "Complaint not found",
      });
    }

    res.status(200).json({
      success: true,
      complaint: {
        complaintId: complaint.complaintId,

        citizen: {
          name: complaint.user.name,
          email: complaint.user.email,
          phone: complaint.user.phone,
        },

        department: complaint.department
          ? {
              id: complaint.department._id,
              name: complaint.department.name,
              email: complaint.department.email,
              phone: complaint.department.phone,
            }
          : null,

        title: complaint.title,
        description: complaint.description,
        priority: complaint.priority,

        status: complaint.status,

        location: complaint.location,

        images: complaint.images,

        resolutionNote: complaint.resolutionNote,

        createdAt: complaint.createdAt,
        updatedAt: complaint.updatedAt,
        resolvedAt: complaint.resolvedAt,
      },
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
