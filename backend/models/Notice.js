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
        // required: true,
    },

    municipality: {
        type: String,
        default: "Kathmandu Metropolitan City"
    },

    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Department"
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
        ref: "Department",
        required: true
    },

}, { timestamps: true });

module.exports = mongoose.model("Notice", noticeSchema);