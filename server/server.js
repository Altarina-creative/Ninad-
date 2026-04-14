const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Routes
const contactRoutes = require("./routes/contactRoutes");
const orderRoutes = require("./routes/orderRoutes");
const productRoutes = require("./routes/productRoutes");
const joinRoutes = require("./routes/joinRoutes");
const adminRoutes = require("./routes/adminRoutes");

// ✅ ADD (NEW)
const donationRoutes = require("./routes/donationRoutes");

// Route use
app.use("/api/contact", contactRoutes);
app.use("/api/order", orderRoutes);
app.use("/api", productRoutes);
app.use("/api", adminRoutes);

// ✅ ADD (NEW)
app.use("/api", donationRoutes);

app.use("/api/join", joinRoutes);

// MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log(err));

// Serve frontend
app.use(express.static(path.join(__dirname, "../client/dist")));

// React fallback
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// Server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
