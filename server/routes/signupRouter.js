const express = require("express");

const { signup } = require("../controllers/signupController");
const {
  userValidators,
  addUSerValidationHandler,
} = require("../middlewares/signup/signupValidators");

const router = express.Router();

router.post("/", userValidators, addUSerValidationHandler, signup);

module.exports = router;
