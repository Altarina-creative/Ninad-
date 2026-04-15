const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema(
  {
    name: String,
    address: String,   // ✅ NEW
    pan: String,       // ✅ NEW
    phone: String,
    amount: Number,
    reason: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Donation", donationSchema);
