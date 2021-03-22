const mongoose = require("mongoose");

//Create a Schema
const UserWisdomSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  users_question: {
    type: String,
  },
  users_id: {
    type: String,
  },
  wisdom_id: {
    type: String,
  },
});

module.exports = UserWisdom = mongoose.model("user_wisdom", UserWisdomSchema);
