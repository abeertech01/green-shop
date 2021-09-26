const bcrypt = require("bcrypt");

const User = require("../models/People");

const checkAdmin = async (req, res, next) => {
  try {
    const adminCode = req.query.admin;
    if (adminCode) {
      const userEmail = req.user.email;
      console.log(req.user);
      const user = await User.findOne({ email: userEmail });

      const isValidAdmin = await bcrypt.compare(adminCode, user.adminCode);
      if (isValidAdmin) {
        next();
      } else {
        res.json({
          message: "Invalid adminCode!",
        });
      }
    } else {
      res.json({
        message: "Sorry!! Only an admin can upload products!",
      });
    }
  } catch (err) {
    throw Error("some unknown error in checking Admin!");
  }
};

module.exports = checkAdmin;
