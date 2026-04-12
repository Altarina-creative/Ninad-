const Product = require("../models/Product");

// ADD PRODUCT
const addProduct = async (req, res) => {
  try {
    const { name, price, img, discount } = req.body;

    if (!name || !price) {
      return res.status(400).json({ msg: "Name & Price required ❌" });
    }

    const product = new Product({
      name,
      price,
      img: img || [],
      discount: discount || ""
    });

    await product.save();

    res.json({ message: "Product Added ✅", product });

  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error ❌" });
  }
};

// GET PRODUCTS
const getProducts = async (req, res) => {
  const products = await Product.find();

  res.json({ products });
};

// DELETE PRODUCT
const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted ✅" });
};



// ✅ ONLY ADDED (UPDATE PRODUCT)
const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      message: "Updated ✅",
      product: updatedProduct
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Update Failed ❌" });
  }
};



// ✅ ONLY ADD THIS EXPORT LINE
module.exports = {
  addProduct,
  getProducts,
  deleteProduct,
  updateProduct
};
