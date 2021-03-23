const mongoose = require("mongoose");
const Wisdom = require("../models/Wisdom");
const quotes = require("./quotes.json");

const addQuotes = () => {
  try {
    for (i = 0; i < quotes.quotes.length; i++) {
      // // console.log(quotes.quotes[i])
      // const newWisdom = new Wisdom({
      //     quote: quotes.quotes[i]
      // })
      // newWisdom.save()
      Wisdom.create(quotes.quotes[i], (error, wisdom) => {
        if (!error) {
          console.log(wisdom);
        } else {
          console.log(error);
        }
      });
      // console.log("new quote", newWisdom)
    }
    // try{
    //     console.log(quotes.quotes[5])
  } catch (error) {
    console.log(error);
  }
};
// addQuotes()
