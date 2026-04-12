const express = require("express");
const router = express.Router();

const {
  addProduct,
  getProducts,
  deleteProduct,
  updateProduct
} = require("../controllers/productController");

// const auth = require("../middleware/authMiddleware"); // ❌ COMMENTED

// ✅ SAME NAMING EVERYWHERE
router.get("/products", getProducts);

// ❌ auth COMMENTED (TEMP FIX)
router.post("/products", /* auth, */ addProduct);

// ❌ auth COMMENTED (TEMP FIX)
router.delete("/products/:id", /* auth, */ deleteProduct);

// ✅ ADDED UPDATE ROUTE
router.put("/products/:id", /* auth, */ updateProduct);

module.exports = router;
