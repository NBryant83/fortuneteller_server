//Require Packages//
const mongoose = require("mongoose");

//Create a Schema/Module//
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  wisdom: {
    quote: String,
    date: {
      type: Date,
      default: Date.now,
    },
  },
});

module.exports = User = mongoose.model("user", UserSchema);
