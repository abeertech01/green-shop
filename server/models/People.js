const mongoose = require("mongoose");

const peopleSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    adminCode: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const People = mongoose.model("people", peopleSchema);
module.exports = People;
