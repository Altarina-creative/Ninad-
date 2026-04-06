const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ msg: "No token" });
  }

  try {
    // ✅ FIX 1: Bearer remove safely
    if (token.startsWith("Bearer ")) {
      token = token.split(" ")[1];
    }

    // ✅ FIX 2: extra safety (string trim)
    token = token.trim();

    const verified = jwt.verify(token, "secretkey");

    req.admin = verified;
    next();

  } catch (err) {
    console.log("TOKEN ERROR:", err.message); // 🔍 DEBUG
    res.status(400).json({ msg: "Invalid token" });
  }
};

module.exports = authMiddleware;
