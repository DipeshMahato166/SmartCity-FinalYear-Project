const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema(
  {
    complaintId: {
      type: String,
      unique: true,
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },

    // Complaint location
    location: {
      province: {
        type: String,
        required: true,
      },
      district: {
        type: String,
        required: true,
      },
      municipality: {
        type: String,
        required: true,
      },
      ward: {
        type: String,
        required: true,
      },
      tole: {
        type: String,
        required: true,
      },
      latitude: {
        type: Number,
        required: true,
      },
      longitude: {
        type: Number,
        required: true,
      },
    },

    images: [
      {
        url: {
          type: String,
          // required: true
        },
        publicId: {
          type: String,
        },
        altText: {
          type: String,
        },
      },
    ],

    status: {
      type: String,
      enum: ["pending", "assigned", "in-progress", "resolved"],
      default: "pending",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: true,
    },
    assignedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    assignedAt: {
      type: Date,
      default: null,
    },
    status: {
      type: String,
      enum: [
        "pending",
        "assigned",
        "in-progress",
        "resolved",
        "closed",
        "rejected",
      ],
      default: "pending",
    },
    // Department Resolutin
    resolutionNote: {
      type: String,
      default: "",
    },
    reslovedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Complaint", complaintSchema);
