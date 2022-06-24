const { UserService } = require("../services");
const bcrypt = require('bcrypt')

const {isNullOrEmptyString} = require('../utils/helper')

const saltRound = 16;

const register = async (req, res) => {
  const {fullname, email, password} = req.body

  if (isNullOrEmptyString(fullname) || isNullOrEmptyString(email) || isNullOrEmptyString(password)) {
    res.status(400).json({
      message: "Bad input parameter",
    });
    return
  }

  try {
    // generate hash password
    const passwordHashed = await bcrypt.hash(password, saltRound);

    const newUser = {
      fullName: fullname,
      password: passwordHashed,
      email,
    }
    const userDb = await UserService.create(newUser);
    res.status(200).json({
      message: 'success',
      data: userDb
    })
  } catch (error) {
    res.status(error.status).json({
      message: error.message,
    });
  }

}

module.exports = {register}