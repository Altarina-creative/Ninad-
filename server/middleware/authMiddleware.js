const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ msg: "No token" });

  try {
    const verified = jwt.verify(token, "secretkey");
    req.admin = verified;
    next();
  } catch {
    res.status(400).json({ msg: "Invalid token" });
  }
};

module.exports = authMiddleware;