const { check, validationResult } = require("express-validator");
const { unlink } = require("fs");
const path = require("path");
const createError = require("http-errors");

const Product = require("../../models/Product");

const prodValidator = [
  check("prodName")
    .isLength({ min: 1 })
    .withMessage("product name is required!")
    .isAlpha("en-US", { ignore: " -" })
    .withMessage("Name must not contain anything other than alphabet.")
    .trim()
    .custom(async (value) => {
      try {
        const product = await Product.findOne({ prodName: value });
        if (product) {
          createError("This product is already in stock! 🧨");
        }
      } catch (err) {
        createError(err.message);
      }
    }),
  check("quantity").isNumeric(),
  check("price").isNumeric(),
  check("stock").isNumeric(),
];

const prodValidationResult = (req, res, next) => {
  const errors = validationResult(req);
  const mappedErrors = errors.mapped();
  if (Object.keys(mappedErrors).length === 0) {
    next();
  } else {
    // remove uploaded files
    if (req.file) {
      const { filename } = req.file;
      unlink(
        path.join(__dirname, `/../../public/uploads/${filename}`),
        (err) => {
          if (err) console.log(err);
        }
      );
    }

    // response the errors
    res.status(500).json({
      errors: mappedErrors,
    });
  }
};

module.exports = {
  prodValidator,
  prodValidationResult,
};
