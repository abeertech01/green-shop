const createError = require("http-errors");

const Product = require("../models/Product");

const buyProd = async (req, res) => {
  const id = req.params.id;
  const boughtStock = req.body.boughtStock;

  const product = await Product.findById(id);
  const remainingStock = product.stock - boughtStock;

  const customerName = req.user.userName;

  try {
    if (boughtStock <= product.stock && boughtStock !== 0) {
      if (boughtStock == 1) {
        await Product.findByIdAndUpdate(id, { stock: remainingStock });
        res.json({
          message: `${customerName} has just bought ${req.body.boughtStock} ${product.prodName}`,
        });
      } else {
        await Product.findByIdAndUpdate(id, { stock: remainingStock });
        res.json({
          message: `${customerName} has just bought ${req.body.boughtStock} ${product.prodName}s`,
        });
      }
    } else {
      res.json({
        error: "buying amount cannot be 0 or more than stock",
      });
    }
  } catch (err) {
    throw createError(err);
  }
};

module.exports = {
  buyProd,
};
