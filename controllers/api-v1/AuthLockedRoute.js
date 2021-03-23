//Set-Up//
const jwt = require("jsonwebtoken");
const User = require("../../models/User");

//Route Specific Middleware for jwt auth//
const AuthLockedRoute = async (req, res, next) => {
  try {
    //if incoming jwt
    const authHeader = req.headers.authorization;

    //try to decode iif (if fails-> will throw catch error)
    const decode = jwt.verify(authHeader, process.env.JWT_SECRET);

    //find user from the db
    const foundUser = await User.findById(decode.id);

    //mount the user on res.locals
    res.locals.user = foundUser;
    next();
  } catch (error) {
    console.log("👻", error);
    res.status(400).json({ msg: "Auth failed" });
  }
};
module.exports = AuthLockedRoute;
