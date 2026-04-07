const express = require("express");
const router = express.Router();

const {
  addProduct,
  getProducts,
  deleteProduct
} = require("../controllers/productController");

//const auth = require("../middleware/authMiddleware");

// ✅ SAME NAMING EVERYWHERE
router.get("/products", getProducts);
router.post("/products", auth, addProduct);
router.delete("/products/:id", auth, deleteProduct);

module.exports = router;
