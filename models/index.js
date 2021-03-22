//Require Packages//
const mongoose = require("mongoose");

//Mongoose Config//
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/mernAuth";

//Connect to MONGO_URI//
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
const db = mongoose.connection;

//Database Methods for Debugging//
db.once("open", () => {
  console.log(`👐 mongoDB connection @ ${db.host}: ${db.port} 👐`);
});
db.on("error", (err) => {
  console.error(`☠️ ☠️ ☠️ Oh no! Something is wrong with the DB!\n ${err}`);
});
