//Require Packages//
const express = require("express");
const rowdy = require("rowdy-logger");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const Wisdom = require("./models/Wisdom");
const quotes = require("./seeders/quotes.json");
const mongoose = require("mongoose");
const mongodb = require("mongodb");

//Config Express App//
const app = express();
const PORT = process.env.PORT || 3001;
const rowdyResults = rowdy.begin(app);

//Middleware//
app.use(morgan("tiny"));
app.use(cors());
//request body parser
app.use(express.json());

//Mongoose Config//
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/fortunetellerdb";

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

//Custom Middleware//
// app.use((req, res, next) => {
//   console.log("Hello from a Middleware!🤘");
//   next();
// });

//Test Route// GET(index route)
app.get("/", (req, res) => {
  res.json({ msg: "Hello World 👋 🌎" });
});

//Controllers//
app.use("api-v2/auth-lock", require("./controllers/api-v1/AuthLockedRoute"));
app.use("api-v1/users", require("./controllers/api-v1/usersController"));

//Seeders Route
app.get("/seeders", (req, res) => {
  try {
    Wisdom.insertMany(quotes.quotes, (error, wisdoms) => {
      res.json(wisdoms);
    });
  } catch (error) {
    console.log("😭 😭 😭 ", error);
  }
});

//Tell Express to Listen on Port//
app.listen(PORT, () => {
  rowdyResults.print();
  console.log(`🚢: ${PORT}`);
});
