const express = require("express");

const { getProducts, uploadProduct } = require("../controllers/prodController");
const upload = require("../middlewares/products/picUpload");

const router = express.Router();

router.get("/", getProducts);

router.post("/upload", upload.single("prodImage"), uploadProduct);

module.exports = router;
