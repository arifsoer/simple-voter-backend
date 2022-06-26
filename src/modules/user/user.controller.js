const UserService = require("./user.service");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { isNullOrEmptyString } = require("../../utils/helper");
const { secretKey } = require("../../utils/envConfig");
const {
  ValidationError,
  AuthError,
  DatabaseError,
} = require("../../utils/error");

const saltRound = 16;

// Register user
const register = async (req, res, next) => {
  const { fullName, email, password } = req.body;
  if (
    isNullOrEmptyString(fullName) ||
    isNullOrEmptyString(email) ||
    isNullOrEmptyString(password)
  ) {
    throw new ValidationError("Please check your fullname, email or password");
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
    next(error);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  if (isNullOrEmptyString(email) || isNullOrEmptyString(password)) {
    throw new ValidationError("Please check your email or password");
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
          token,
        },
      });
    } else {
      throw new AuthError();
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login };
