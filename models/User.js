//Require Packages//
const mongoose = require("mongoose");

const WisdomSchema = new mongoose.Schema({
  quote: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//Create a Schema/Module//
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  quotes: [WisdomSchema],
});

module.exports = User = mongoose.model("user", UserSchema);
