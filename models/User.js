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
});

module.exports = User = mongoose.model("user", UserSchema);
