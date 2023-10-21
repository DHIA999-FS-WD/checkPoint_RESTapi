const mongoose = require("mongoose");
const { isEmail } = require("validator");
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    phone: Number,
    password: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = User = model("User", userSchema);
