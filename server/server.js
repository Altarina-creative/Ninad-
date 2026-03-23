const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// ROUTES
const contactRoutes = require("./routes/contactRoutes");
const orderRoutes = require("./routes/orderRoutes");
const productRoutes = require("./routes/productRoutes");
const adminRoutes = require("./routes/adminRoutes");

// 🔥 NEW ROUTE
const joinRoutes = require("./routes/joinRoutes");

const app = express();

// CORS
app.use(cors());

app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb", extended: true }));

// ROUTES
app.use("/api/contact", contactRoutes);
app.use("/api", orderRoutes);
app.use("/api", productRoutes);
app.use("/api", adminRoutes);

// 🔥 ADD THIS
app.use("/api/join", joinRoutes);

// DB CONNECT
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log("DB Error ❌", err));

// ✅ ONLY REQUIRED CHANGE (PORT FIX)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
