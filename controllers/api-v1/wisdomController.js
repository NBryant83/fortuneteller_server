//Require Packages//
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const AuthLockedRoute = require("./AuthLockedRoute");
const {User} = require("../../models/User");
const {Wisdom} = require("../../models/User");
const { Error } = require("mongoose");
require("dotenv").config;

//GET "/users" --test endpoint
router.get("/", (req, res) => {
  res.json({ msg: "hello from 🔮" });
});

//POST route
router.post('/:userId/quotes', async(req, res) => {
  try {
    const quote = new Wisdom ({
      quote: req.body.quote
    })
    console.log()
    const findUser = await User.findById(req.params.userId)
    console.log(findUser)
    findUser.quotes.push(quote)
    await findUser.save(User)
    res.json({msg: "Found User"})
  } catch (error) {
    console.log(error)
  }
})

module.exports = router;
