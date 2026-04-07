const Product = require("../models/Product");

// ADD PRODUCT
const addProduct = async (req, res) => {
  try {
    const { name, price, img, discount } = req.body;

    // ✅ FIX (validation simplified)
    if (!name || !price) {
      return res.status(400).json({ msg: "Name & Price required ❌" });
    }

    const product = new Product({
      name,
      price,
      img: img || [],            // ✅ FIX (safe fallback)
      discount: discount || ""   // ✅ FIX (safe fallback)
    });

    await product.save();

    // ✅ FIX (return product also)
    res.json({ message: "Product Added ✅", product });

  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error ❌" });
  }
};

// GET PRODUCTS
const getProducts = async (req, res) => {
  const products = await Product.find();

  // ✅ FIX (consistent response)
  res.json({ products });
};

// DELETE PRODUCT
const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted ✅" });
};

module.exports = { addProduct, getProducts, deleteProduct };
