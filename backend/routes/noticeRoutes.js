const express = require("express");
const Notice = require("../models/Notice");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

// @route POST /api/notices
// @desc Create a new Notice
// @access Private/Admin
router.post("/", protect, admin, async (req, res) => {
  try {
    const { title, description, department, image, priority } = req.body;

    const notice = new Notice({
      title,
      description,
      department,
      ward,
      municipality,
      attachment,
      priority,
      status,
      publishedBy,
      createdBy: req.user._id, // Reference to the admin user who create it
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
router.put("/:id", protect, admin, async (req, res) => {
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
      publishedBy,
    } = req.body;

    // Find notice by ID
    const notice = await Notice.findById(req.params.id);

    if (notice) {
      // Update Notice fields
      notice.title = title || notice.title;
      notice.description = description || notice.description;
      notice.department = department || notice.department;
      notice.ward = ward || notice.ward;
      notice.attachment = attachment || notice.attachment;
      notice.priority = priority || notice.priority;
      notice.status = status || notice.status;
      notice.publishedBy = publishedBy || notice.publishedBy;
      notice.cre;

      // Save the updated notice
      const updatedNotice = await notice.save();
      res.json(updatedNotice);
    } else {
      res.status(404).json({ message: "Notice not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// @route DELETE /api/notices/:id
// @desc Delete a notice by ID
// @access Private/Admin
router.delete("/:id", protect, admin, async (req, res) => {
  try {
    // Find the notice by ID
    const notice = await Notice.findById(req.params.id);

    if (notice) {
      // Remove the notice from DB
      await notice.deleteOne();
      res.json({ message: "Notice removed" });
    } else {
      res.status(404).json({ message: "Notice not found" });
    }
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

    let notices = await Notice.find(query).sort({ createAt: -1 });
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
    const notice = await Notice.findById(req.params.id);
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
