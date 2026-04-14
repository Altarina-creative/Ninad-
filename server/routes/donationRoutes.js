const express = require("express");
const router = express.Router();

const {
  addDonation,
  getDonations
} = require("../controllers/donationController");

// ✅ POST (save donation)
router.post("/donate", addDonation);

// ✅ GET (admin view)
router.get("/donations", getDonations);

module.exports = router;
