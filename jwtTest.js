// const jwt = require('jsonwebtoken')

// const jwtTest = () => {
//     try {
//         /// create payload
//         const payload = {
//             name: 'username',
//             id: 'user_id',
//         }

//         /// sign jwt payload with a string
//         const token = jwt.sign(payload, 'jwt secret', { expiresIn: 60 * 60})
//         console.log(token)
//         ///decode and verify jwt
// const decode = jwt.verify(token, 'jwt secret')
// console.log(decode)

//     } catch (error) {
//         console.log(error)
//     }
// }

// jwtTest()