//Require Packages//
const router = require("express").Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const AuthLockedRoute = require("./AuthLockedRoute");
require("dotenv").config;

//GET "/users" --test endpoint
router.get("/", (req, res) => {
  res.json({ msg: "hello from users!" });
});

//POST "/users/register" --create a new user
router.post("/register", async (req, res) => {
  try {
    //   // look at req.body and see if the username exists already in th db
    const searchUser = await User.findOne({
      username: req.body.username,
    });

    // // if the user is found -- return function and respond
    if (searchUser) {
      return res.status(400).json({ msg: "username exists already" });
    } else {
      // hash the password from the req.body
      const password = req.body.password;
      const saltRounds = 12;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      console.log(hashedPassword);
      // CREATE a user in the db
      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      console.log(newUser);
      await newUser.save();

      // make a jwt payload
      const payload = {
        username: newUser.username,
      };

      // sign it and send it back
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: 60 * 60,
      });
      res.json({ token });
    }
    //catch errors & display
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "🔥  error" });
  }
});

//POST "/users/login" --validate credentials
router.post("/login", async (req, res) => {
  try {
    const searchUser = await User.findOne({
      username: req.body.username
    });
    const loginError = "Incorrect username or password, please try again";
    if (!searchUser) return res.status(400).json({ msg: loginError });
    const comparePassword = await bcrypt.compare(
      req.body.password,
      searchUser.password
    );
    if (!comparePassword) return res.status(400).json({ msg: loginError });
    const payload = {
      username: searchUser.username,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: 60 * 60,
    });
    res.json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error" });
  }
});

// GET "/auth-locked" --redirect if a bad token is found
router.get("/auth-locked", AuthLockedRoute, (req, res) => {
  console.log(res.locals.user);
  res.json({ msg: "Bad token found 🤕" });
});

module.exports = router;
