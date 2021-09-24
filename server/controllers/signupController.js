const bcrypt = require("bcrypt");

const People = require("../models/People");

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
      res.status(201).json(user);
    } else {
      const user = await People.create({
        ...req.body,
        password: hashedPassword,
      });
      res.status(201).json(user);
    }
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { signup };
