const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const contactRoutes = require("./routes/contactRoutes");
const orderRoutes = require("./routes/orderRoutes");
const productRoutes = require("./routes/productRoutes");
const joinRoutes = require("./routes/joinRoutes");

app.use("/api/contact", contactRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/product", productRoutes);
app.use("/api/join", joinRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("NINAD API is running 🚀");
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log(err));

// Serve frontend (Vite dist)
app.use(express.static(path.join(__dirname, "../client/dist")));

// ✅ FIXED for Express v5
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
