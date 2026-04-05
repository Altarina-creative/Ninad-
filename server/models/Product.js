const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  img: [
    {
      type: String
    }
  ],
  discount: {
    type: String // ✅ ADD THIS ONLY
  }
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
