const mongoose = require("mongoose")


const complaintSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    images: [
        {
            url: {
                type: String,
                // required: true
            },
            altText: {
                type: String,
            }
        }
    ],

    status: {
        type: String,
        enum: ["pending", "assigned", "in-progress", "resolved"],
        default: "pending",
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Department",
    }
}, {timestamps: true});

module.exports = mongoose.model("Complaint", complaintSchema);