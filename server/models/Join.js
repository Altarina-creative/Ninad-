const mongoose = require("mongoose");

const joinSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
  },
  message: {
    type: String,
  },
}, { timestamps: true });

module.exports = mongoose.model("Join", joinSchema);