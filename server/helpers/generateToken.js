const jwt = require("jsonwebtoken");

module.exports = async (reqBody) => {
  const userObject = {
    userName: reqBody.userName,
    email: reqBody.email,
  };
  const token = await jwt.sign(userObject, process.env.JWT_SECRET);

  return { userObject, token };
};
