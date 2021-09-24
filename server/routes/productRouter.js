const express = require("express");

const { getProducts, uploadProduct } = require("../controllers/prodController");
const upload = require("../middlewares/products/picUpload");
const {
  prodValidator,
  prodValidationResult,
} = require("../middlewares/products/prodValidators");

const router = express.Router();

router.get("/", getProducts);

router.post(
  "/upload",
  upload.single("prodImage"),
  prodValidator,
  prodValidationResult,
  uploadProduct
);

module.exports = router;
