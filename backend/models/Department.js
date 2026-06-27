const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const departmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    phone: String,

    address: String,

    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

// Password Hash Middleware

departmentSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }

  const salt = await bcrypt.genSalt(10);

  this.password = await bcrypt.hash(this.password, salt);
});

// Match Department Password

departmentSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("Department", departmentSchema);
