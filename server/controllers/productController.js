const Product = require("../models/Product");

// ADD PRODUCT
const addProduct = async (req, res) => {
  try {
    const { name, price, img } = req.body;

    if (!name || !price || !img) {
      return res.status(400).json({ msg: "All fields required ❌" });
    }

    const product = new Product({
      name,
      price, // ✅ string directly store hoga
      img
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