//Require Packages//
const express = require("express");
const rowdy = require("rowdy-logger");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const mongoose = require('mongoose')
//Config Express App//
const app = express();
const PORT = process.env.PORT || 3000;
const rowdyResults = rowdy.begin(app);

//Middleware//
app.use(morgan("tiny"));
app.use(cors());
//request body parser
app.use(express.json());
// mongoose.connect('mongodb://localhost/fortunetellerdb')


//Mongoose Config//
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/fortunetellerdb";

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
// app.use("/api-v1/users", require("./controllers/api-v1/usersController");
app.use("/api-v1/users", require("./controllers/usersController"));

app.get('/seed', (req, res) => {
  
})
//Tell Express to Listen on Port//
app.listen(PORT, () => {
  rowdyResults.print();
  console.log(`🚢: ${PORT}`);
});
