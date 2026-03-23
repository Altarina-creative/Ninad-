const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  try {

    const { name, email, message } = req.body;

    const newContact = new Contact({
      name,
      email,
      message
    });

    await newContact.save();

    res.status(201).json({ message: "Message Saved Successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;