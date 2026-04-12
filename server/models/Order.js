const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  cart: [
    {
      name: String,
    price: Number,
    qty: Number  // ✅ FIX (Number se String kiya)
    }
  ],
  total: Number,
  email: String,
  address: String,
  phone: String,
  pincode: String
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);
