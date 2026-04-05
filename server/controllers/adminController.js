const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });

  if (!admin) {
    return res.status(400).json({ msg: "Not authorized ❌" });
  }

  const isMatch = await bcrypt.compare(password, admin.password);

  if (!isMatch) {
    return res.status(400).json({ msg: "Wrong Password ❌" });
  }

  const token = jwt.sign({ id: admin._id }, "secretkey", {
    expiresIn: "1d"
  });

  res.json({ token });
};

// ✅ VERY IMPORTANT LINE
module.exports = { loginAdmin };
