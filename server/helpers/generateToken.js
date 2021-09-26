const jwt = require("jsonwebtoken");

const User = require("../models/People");

module.exports = async (reqBody) => {
  const user = await User.findOne({ email: reqBody.email });

  const userObject = {
    userName: user.userName,
    email: user.email,
  };

  const token = await jwt.sign(userObject, process.env.JWT_SECRET);

  return { userObject, token };
};
