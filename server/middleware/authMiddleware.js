const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) return res.status(401).json({ msg: "No token" });

  try {
    // ✅ FIX (Bearer remove)
    if (token.startsWith("Bearer ")) {
      token = token.split(" ")[1];
    }

    const verified = jwt.verify(token, "secretkey");
    req.admin = verified;
    next();
  } catch {
    res.status(400).json({ msg: "Invalid token" });
  }
};

module.exports = authMiddleware;
