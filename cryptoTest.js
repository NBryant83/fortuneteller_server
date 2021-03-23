// const bcrypt = require('bcryptjs')

const testCrypto = async () => {
    try {
        // testing hashing
        const password = "hello1"
        const saltRounds = 12
        const hashedPassword = await bcrypt.hash(password, saltRounds)
        console.log('hashed password', hashedPassword)
        // testing string

        const comparePassword = await bcrypt.compare('hello2', hashedPassword)
        console.log('comparePasswords:', comparePassword)
    } catch (error) {
        console.log(error) 
    }
}

testCrypto()