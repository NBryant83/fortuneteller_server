const mongoose = require('mongoose')
const User = require('./models/User')
const UsersWisdom = require('./models/User')
const Wisdom = require('./models/User')
const models = require('./models')
require('./models')
// CREATE a user
const userTest = async () => {
 try {
  // CREATE a user
  const newUser = new User({
   username: 'test name',
   password: 'password'
  })
  await newUser.save()
  console.log('newUser', newUser)
// READ a user
  const foundUser = await User.findOne({
   name: newUser.name
  })
// UPDATE a user
  console.log('foundUser', foundUser)
// DESTROY a user

  // UPDATE a user
  foundUser.name = 'test #2'
  await foundUser.save()
  const findUserAgain = await User.findOne({
   name: 'bangBang'
  })
  console.log('findUserAgain', findUserAgain)
  // DESTROY a user
  const deleteUser = await User.deleteOne({
   name: 'bangBang'
  })
  console.log('deleteUser', deleteUser)
  // we done
  process.exit()
 } catch (error) {
  console.log(error)
  process.exit()
 }
}
userTest()

