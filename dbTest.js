//Require Packages//
// const mongoose = require("mongoose");
// const User = require("./models/User");
// const UsersWisdom = require("./models/User");
// const Wisdom = require("./models/User");
// const models = require("./models");
// require("./models");

// const quotes = require("./quotes.json");

//use quotes.quotes b/c it is inside a key value pair

// CREATE a user
// const userTest = async () => {
//   try {
//     // CREATE a user
//     const newUser = new User({
//       username: "test name",
//       password: "password",
//     });
//     await newUser.save();
//     console.log("newUser", newUser);

//     // READ a user (find one)
//     const foundUser = await User.findOne({
//       name: newUser.name,
//     });
//     console.log("foundUser", foundUser);
//     foundUser.name = "test #2";
//     await foundUser.save();

    //READ a user (find one again)
    // const findUserAgain = await User.findOne({
    //   name: "bangBang",
    // });
    // console.log("findUserAgain", findUserAgain);

    // DESTROY a user
    // const deleteUser = await User.deleteOne({
    //   name: "test name",
    // });
    // console.log("deleteUser", deleteUser);
    // process.exit();

    //catch if error
//   } catch (error) {
//     console.log("👻 👻 👻 ", error);
//     process.exit();
//   }
// };
// userTest();
