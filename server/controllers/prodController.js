const createError = require("http-errors");
const { unlink } = require("fs");
const path = require("path");

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

const increaseStock = async (req, res) => {
  const prodId = req.params.id;
  try {
    const product = await Product.findByIdAndUpdate(prodId, {
      stock: req.body.incStock,
    });
    res.json(product);
  } catch (err) {
    throw createError(err);
  }
};

const removeProduct = async (req, res) => {
  const prodId = req.params.id;
  try {
    const product = await Product.findByIdAndDelete({ _id: prodId });
    unlink(
      path.join(__dirname, `/../public/uploads/${product.prodImage}`),
      (err) => {
        if (err) console.log(err);
      }
    );
    res.status(200).json(product);
  } catch (err) {
    throw createError(err);
  }
};

module.exports = {
  getProducts,
  uploadProduct,
  increaseStock,
  removeProduct,
};
