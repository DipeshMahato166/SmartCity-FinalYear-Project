const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true,
    },

    ward: {
        type: String,
        default: "Ward No 1"
    },

    municipality: {
        type: String,
        default: "Kathmandu Metropolitan City"
    },

    department: {
        type: String,
        enum: ["health", "education", "tax", "electricity", "transport", "water", "general"],
        required: true,
    },

    attachment: [
        {
            url: {
                type: String //pdf/image
            },
            altText: {
                type: String,
                default: ""
            }
        }
    ],

    priority: {
        type: String,
        enum: ["normal", "important", "urgent"],
        default: "normal"
    },

    status: {
        type: String,
        enum: ["active", "archived"],
        default: "active"
    },

    publishedBy: {
        type: String
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

}, { timestamps: true });

module.exports = mongoose.model("Notice", noticeSchema);