const express = require("express");

const { getProducts, uploadProduct } = require("../controllers/prodController");

const router = express.Router();

router.get("/", getProducts);

router.post("/upload", uploadProduct);

module.exports = router;
