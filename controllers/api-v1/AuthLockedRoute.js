//Set-Up//
const jwt = require("jsonwebtoken");
const User = require("../../models/User");

//Route Specific Middleware for jwt auth//
const AuthLockedRoute = async (req, res, next) => {
  try {
    //inf incoming jwt
    //try to decode iif (if fails-> will throw catch error)
    //find user from the db
    //mount the user on res.locals
  } catch (error) {
    console.log("👻", error);
    res.status(400).json({ msg: "Auth failed" });
  }
};
module.exports = AuthLockedRoute;
