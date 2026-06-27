const express = require("express");
const Notice = require("../models/Notice");
const { departmentProtect } = require("../middleware/departmentAuth");
const {
  uploadFileToCloudinary,
  multerMiddleware,
} = require("../config/cloudinaryConfig");

const router = express.Router();

// @route POST /api/notices
// @desc Create a new Notice
// @access Private/Admin
router.post("/", departmentProtect, multerMiddleware, async (req, res) => {
  try {
    const {
      title,
      description,
      municipality,
      ward,
      department,
      attachment,
      priority,
    } = req.body;

    let attachments = [];

    // PDF/Image upload
    if (req.file) {
      const upload = await uploadFileToCloudinary(req.file);

      attachments.push({ url: upload.secure_url, altText: "Notice attachment" });
    }

    const notice = new Notice({
      title,
      description,
      department: req.department._id,
      ward,
      municipality,
      attachment: attachments,
      priority,
      status: "active",
      publishedBy: req.department.name,
      createdBy: req.department._id, // Reference to the admin user who create it
    });

    const createNotice = await notice.save();

    res.status(201).json(createNotice);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// @route PUT /api/notices/:id
// @desc Update an existing notice ID
// @access Private/Admin
router.put("/:id", departmentProtect, multerMiddleware, async (req, res) => {
  try {
    const {
      title,
      description,
      department,
      ward,
      municipality,
      attachment,
      priority,
      status,
    } = req.body;

    // Find notice by ID
    const notice = await Notice.findById(req.params.id);

    if (!notice) {
      return res.status(404).json({
        message: "Notice not found",
      });
    }

    // Check ownership
    if (notice.department.toString() !== req.department._id.toString()) {
      return res.status(403).json({
        message: "Not your notice",
      });
    }

    // update attachment if new file uploaded
    if (req.file) {
      const upload = await uploadFileToCloudinary(req.file);

      notice.attachment = [{ url: upload.secure_url, altText: "Updated notice attachment"}]
    }

    notice.title = title || notice.title;

    notice.description = description || notice.description;

    notice.ward = ward || notice.ward;

    notice.municipality = municipality || notice.municipality;

    notice.priority = priority || notice.priority;

    notice.status = status || notice.status;

    // Save the updated notice
    const updatedNotice = await notice.save();
    res.json(updatedNotice);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// @route DELETE /api/notices/:id
// @desc Delete a notice by ID
// @access Private/Admin
router.delete("/:id", departmentProtect, async (req, res) => {
  try {
    // Find the notice by ID
    const notice = await Notice.findById(req.params.id);

    if (!notice) {
      return res.status(404).json({
        message: "Notice not found"
      });
    }

    // Check Department
    if (notice.department.toString() !== req.department._id.toString()) {
      return res.status(403).json({
        message: "Nout your Notice"
      })
    }

    await notice.deleteOne();

    res.json({
      message: "Notice Removed"
    })
    
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// @route GET /api/notices
// @desc Get all notices with optional query filters
// @access Public
router.get("/", async (req, res) => {
  try {
    const { municipality, department, priority, search } = req.query;

    let query = {};

    // Filter by municipality
    if (municipality) {
      query.municipality = municipality;
    }

    // Filter by department
    if (department) {
      query.department = department;
    }

    // Filter by priority
    if (priority) {
      query.priority = priority;
    }

    // Search by title or description
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    const notices = await Notice.find(query)
      .populate("department")
      .populate("createdBy")
      .sort({ createdAt: -1 });
    res.json(notices);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// @route GET /api/notices/new-arrivals
// @desc Retrieve latest 4 notices - Creation date
// @access Public
router.get("/new-arrivals", async (req, res) => {
  try {
    // Fetch latest 4 notices
    const newArrivals = await Notice.find().sort({ createdAt: -1 }).limit(4);
    res.json(newArrivals);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// @route GET /api/notices/:id
// @desc Get a single notice by ID
// @access Public
router.get("/:id", async (req, res) => {
  try {
    const notice = await Notice.findById(req.params.id)
      .populate("department")
      .populate("createdBy");
    if (notice) {
      res.json(notice);
    } else {
      res.status(404).json({ message: "Notice Not Found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
