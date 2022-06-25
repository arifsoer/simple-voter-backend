// user router
const userRouter = require('express').Router();
const {register, login} = require('./user.controller')

userRouter.post('/register', register)
userRouter.post('/login', login)

module.exports = userRouter