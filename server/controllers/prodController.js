const createError = require("http-errors");

const Product = require("../models/Product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    throw createError(err);
  }
};

const uploadProduct = async (req, res) => {
  try {
    const result = await Product.create({
      ...req.body,
      prodImage: req.file.filename,
    });
    res.json(result);
  } catch (err) {
    throw createError(err);
  }
};

module.exports = {
  getProducts,
  uploadProduct,
};
