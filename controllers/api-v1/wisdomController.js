//Require Packages//
const router = require("express").Router();
const Wisdom = require("../../models/Wisdom");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const AuthLockedRoute = require("./AuthLockedRoute");
require("dotenv").config;
const quotes = require("../../seeders/quotes.json");

//GET "/users" --test endpoint
router.get("/", (req, res) => {
  res.json({ msg: "hello from 🔮" });
});

//event listener

module.exports = router;
