const { UserService } = require("../services");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { isNullOrEmptyString } = require("../utils/helper");
const { secretKey } = require("../utils/envConfig");

const saltRound = 16;

// Register user
const register = async (req, res) => {
  const { fullName, email, password } = req.body;
  console.log(fullName);
  if (
    isNullOrEmptyString(fullName) ||
    isNullOrEmptyString(email) ||
    isNullOrEmptyString(password)
  ) {
    res.status(400).json({
      status: 400,
      message: "Bad input parameter",
    });
    return;
  }

  try {
    // generate hash password
    const passwordHashed = await bcrypt.hash(password, saltRound);

    const newUser = {
      fullName: fullName,
      password: passwordHashed,
      email,
    };
    const userDb = await UserService.create(newUser);
    res.status(200).json({
      status: 200,
      message: "success",
      data: userDb,
    });
  } catch (error) {
    res.status(error.status).json({
      statusbar: error.status,
      message: error.message,
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (isNullOrEmptyString(email) || isNullOrEmptyString(password)) {
    res.status(400).json({
      status: 400,
      message: "Login Failed",
    });
    return;
  }

  try {
    const user = await UserService.getOne({ email });
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (isPasswordMatch) {
      const token = jwt.sign(
        {
          data: user.id,
          exp: Math.floor(Date.now() / 1000) + 3600,
        },
        secretKey
      );
      res.status(200).json({
        status: 200,
        message: "sucsess",
        data: {
          token
        }
      });
    } else {
      res.status(500).json({
        status: 500,
        message: "Login Failed",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      message: "Login Failed",
    });
  }
};

module.exports = { register, login };
