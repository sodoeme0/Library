const rateLimiter = require("express-rate-limit")

exports.logInLimiter = rateLimiter({

windowMS: 60 * 1000,// 1 min window
max: 5,
//message: 'Too many login requesrs. Try again later'
handler: (req, res, next) =>{
    let err = new Error('Too many login requesrs. Try again later')
    err.status = 429;
    return next(err)
}
})