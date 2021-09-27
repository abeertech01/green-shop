const bcrypt = require("bcrypt");
const createError = require("http-errors");

const User = require("../models/People");

const getToken = require("../helpers/generateToken");

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (isValidPassword) {
        const tokenAndUserObj = await getToken(req.body);
        const userObject = tokenAndUserObj.userObject;
        const token = tokenAndUserObj.token;
        res.json({
          userObject,
          token,
        });
      } else {
        throw createError("Invalid email or password! Try again.");
      }
    } else {
      throw createError("Invalid email or password! Try again.");
    }
  } catch (err) {
    res.json({
      errors: {
        common: {
          message: err.message,
        },
      },
    });
  }
};

module.exports = {
  login,
};
