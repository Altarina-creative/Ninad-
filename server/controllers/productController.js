const Product = require("../models/Product");

// ADD PRODUCT
const addProduct = async (req, res) => {
  try {
    const { name, price, img, discount } = req.body;

    // ✅ FIX (sirf yahi change hai)
    if (!name || !price || !Array.isArray(img) || img.length === 0) {
      return res.status(400).json({ msg: "At least 1 image required ❌" });
    }

    const product = new Product({
      name,
      price,
      img,
      discount // ✅ ADD
    });

    await product.save();

    res.json({ message: "Product Added ✅" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error ❌" });
  }
};

// GET PRODUCTS
const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// DELETE PRODUCT
const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted ✅" });
};

module.exports = { addProduct, getProducts, deleteProduct };
