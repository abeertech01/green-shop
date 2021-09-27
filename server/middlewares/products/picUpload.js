const multer = require("multer");
const path = require("path");
const createError = require("http-errors");

const UPLOADS_FOLDER = `${__dirname}/../../public/uploads`;
const allowed_file_types = ["image/jpeg", "image/jpg", "image/png"];

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_FOLDER);
  },
  filename: (req, file, cb) => {
    const fileExt = path.extname(file.originalname);
    const fileName =
      file.originalname
        .replace(fileExt, "")
        .toLowerCase()
        .split(" ")
        .join("-") +
      "-" +
      Date.now();
    cb(null, fileName + fileExt);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 12000000,
  },
  fileFilter: (req, file, cb) => {
    if (allowed_file_types.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(createError("Only .jpeg, .jpg and .png files are allowed!"));
    }
  },
});

module.exports = upload;
