const mongoose = require("mongoose");

//Create a Schema
const WisdomSchema = new mongoose.Schema({
  quote: {
    type: String,
  },
});

module.exports = Wisdom = mongoose.model("wisdom", WisdomSchema);
