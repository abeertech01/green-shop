const Product = require("../models/Product");

const buyProd = async (req, res) => {
  const id = req.params.id;
  const boughtStock = req.body.boughtStock;

  const product = await Product.findById(id);
  const remainingStock = product.stock - boughtStock;

  const customerName = "Abeer";

  try {
    if (boughtStock == 1) {
      await Product.findByIdAndUpdate(id, { stock: remainingStock });
      res.json({
        message: `${customerName} has just bought ${req.body.boughtStock} ${product.prodName}`,
      });
    } else if (boughtStock > 1) {
      await Product.findByIdAndUpdate(id, { stock: remainingStock });
      res.json({
        message: `${customerName} has just bought ${req.body.boughtStock} ${product.prodName}s`,
      });
    } else {
      res.json({
        error: `Select an amount how much you want to purchase`,
      });
    }
  } catch (err) {
    throw Error(err);
  }
};

module.exports = {
  buyProd,
};
