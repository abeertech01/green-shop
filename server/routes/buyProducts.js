const express = require("express");
const router = express.Router();

const { buyProd } = require("../controllers/buyProdController");

const checkLogin = require("../middlewares/login/checkLogin");

router.patch("/:id", checkLogin, buyProd);

module.exports = router;
