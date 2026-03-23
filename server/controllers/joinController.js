const Join = require("../models/Join");

// Save data
const createJoin = async (req, res) => {
  try {
    const newUser = new Join(req.body);
    await newUser.save();

    res.status(201).json({ message: "Joined Successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error saving data" });
  }
};

module.exports = { createJoin };