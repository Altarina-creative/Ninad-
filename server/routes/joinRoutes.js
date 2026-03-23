const express = require("express");
const router = express.Router();
const { createJoin } = require("../controllers/joinController");

// POST
router.post("/", createJoin);

module.exports = router;