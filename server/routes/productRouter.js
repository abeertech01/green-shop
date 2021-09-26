const express = require("express");

const { getProducts, uploadProduct } = require("../controllers/prodController");
const upload = require("../middlewares/products/picUpload");
const {
  prodValidator,
  prodValidationResult,
} = require("../middlewares/products/prodValidators");
const checkLogin = require("../middlewares/login/checkLogin");
const checkAdmin = require("../middlewares/checkAdmin");

const router = express.Router();

router.get("/", getProducts);

router.post(
  "/upload",
  checkLogin,
  checkAdmin,
  upload.single("prodImage"),
  prodValidator,
  prodValidationResult,
  uploadProduct
);

module.exports = router;
