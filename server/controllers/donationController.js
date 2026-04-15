const Donation = require("../models/Donation");

// ✅ ADD DONATION
const addDonation = async (req, res) => {
  try {
    // ✅ FIX: address & pan add kiya
    const { name, address, pan, phone, amount, reason } = req.body;

    const newDonation = new Donation({
      name,
      address,
      pan,
      phone,
      amount,
      reason
    });

    await newDonation.save();

    res.status(201).json({ message: "Donation saved successfully" });

  } catch (error) {   // ✅ FIX: catch properly added
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ GET DONATIONS
const getDonations = async (req, res) => {
  try {
    const data = await Donation.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data" });
  }
};

module.exports = { addDonation, getDonations };
