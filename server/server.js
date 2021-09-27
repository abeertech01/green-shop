// Importing required modules
const cors = require("cors");
const express = require("express");

// parse env variables
require("dotenv").config();

require("./helpers/db/mongodb.js")();

// Configuring port
const port = process.env.PORT || 9000;

const app = express();

// Configure middlewares
app.use(cors());
app.use(express.json());

app.set("view engine", "html");

// Static folder
app.use(express.static(__dirname + "/views/"));

// Defining route middlewares
app.use("/api/signup", require("./routes/signupRouter"));
app.use("/api/login", require("./routes/loginRouter"));
app.use("/api/products", require("./routes/productRouter"));
app.use("/api/buy", require("./routes/buyProducts"));

const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/errorHandlers");

// 404 error handling
app.use(notFoundHandler);

// common error handling
app.use(errorHandler);

// Listening to port
app.listen(port);
console.log(`Listening On http://localhost:${port}/api`);

module.exports = app;
