const express = require("express");
const router = express.Router();

const {
  addProduct,
  getProducts,
  deleteProduct
} = require("../controllers/productController");

const auth = require("../middleware/authMiddleware");

// PUBLIC
router.get("/products", getProducts);

// 🔐 PROTECTED
router.post("/add-product", auth, addProduct);
router.delete("/product/:id", auth, deleteProduct);

module.exports = router;