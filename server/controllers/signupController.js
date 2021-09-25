const bcrypt = require("bcrypt");

const People = require("../models/People");

const getToken = require("../helpers/generateToken");

const signup = async (req, res) => {
  let hashedPassword = await bcrypt.hash(req.body.password, 12);
  try {
    if (req.body.adminCode) {
      let hashedAdminCode = await bcrypt.hash(req.body.adminCode, 12);
      const user = await People.create({
        ...req.body,
        password: hashedPassword,
        adminCode: hashedAdminCode,
      });
    } else {
      const user = await People.create({
        ...req.body,
        password: hashedPassword,
      });
    }

    const tokenAndUserObj = await getToken(req.body);
    const userObject = tokenAndUserObj.userObject;
    const token = tokenAndUserObj.token;

    res.status(201).json({
      userObject,
      token,
    });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { signup };
