const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: String, // ✅ ab string hai (100/kg allow)
    required: true
  },
  img: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);