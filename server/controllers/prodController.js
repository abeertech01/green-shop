const Product = require("../models/Product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.log(err);
  }
};

const uploadProduct = async (req, res) => {
  try {
    const result = await Product.create(req.body);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getProducts,
  uploadProduct,
};
