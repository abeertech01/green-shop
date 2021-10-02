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
        res.status(200).json({
          userObject,
          token,
        });
      } else {
        res.status(500).json({
          error: "Invalid email or password! Try again.",
        });
      }
    } else {
      res.status(500).json({
        error: "Invalid email or password! Try again. 🧨",
      });
    }
  } catch (err) {
    throw createError(err);
  }
};

module.exports = {
  login,
};
