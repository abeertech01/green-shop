const bcrypt = require("bcrypt");

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
        console.log(tokenAndUserObj);
        const userObject = tokenAndUserObj.userObject;
        const token = tokenAndUserObj.token;
        res.json({
          userObject,
          token,
        });
      } else {
        res.json({
          error: "Invalid email or password! Try again.",
        });
      }
    } else {
      res.json({
        error: "Invalid email or password! Try again.",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  login,
};
