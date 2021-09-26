const jwt = require("jsonwebtoken");

const checkLogin = (req, res, next) => {
  try {
    const token = req.params.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    res.locals.loggedInUser = decoded;
    next();
  } catch (err) {
    res.status(500).json({
      error: "Authentication failure!",
    });
  }
};

module.exports = checkLogin;
