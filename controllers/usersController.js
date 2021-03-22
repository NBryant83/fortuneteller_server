//Require Packages//
const router = require("express").Router();
const User = require("../../models/User.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const AuthLockedRoute = require("./AuthLockedRoute.js");

//GET "/users" --test endpoint

//POST "/users/register" --create a new user

//POST "/users/login" --validate credentials

//GET "/auth-locked" --redirect if a bad token is found

module.exports = router;
