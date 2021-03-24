//Require Packages//
const router = require("express").Router();
const Wisdom = require("../../models/Wisdom");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const AuthLockedRoute = require("./AuthLockedRoute");
require("dotenv").config;

//GET "/users" --test endpoint
router.get("/", (req, res) => {
  res.json({ msg: "hello from 🔮" });
});

module.exports = router;
