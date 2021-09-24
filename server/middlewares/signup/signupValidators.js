const { check, validationResult } = require("express-validator");

const User = require("../../models/People");

const userValidators = [
  check("userName")
    .isLength({ min: 1 })
    .withMessage("Name is required")
    .isAlpha("en-US", { ignore: " -" })
    .withMessage("Name must not contain anything other than alphabet")
    .trim(),
  check("email")
    .isEmail()
    .withMessage("Invalid email address")
    .trim()
    .custom(async (value) => {
      try {
        const user = await User.findOne({ email: value });
        if (user) {
          throw Error("This email already is in use!");
        }
      } catch (err) {
        throw Error(err.message);
      }
    }),
  check("password")
    .isStrongPassword()
    .withMessage(
      "Password must contain at least 1 lowercase letter, 1 number and 1symbol!"
    ),
];

const addUSerValidationHandler = function (req, res, next) {
  const errors = validationResult(req);
  const mappedErrors = errors.mapped();
  if (Object.keys(mappedErrors).length === 0) {
    next();
  } else {
    res.status(500).json({
      errors: mappedErrors,
    });
  }
};

module.exports = {
  userValidators,
  addUSerValidationHandler,
};
