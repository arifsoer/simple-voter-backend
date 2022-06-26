const jwt = require("jsonwebtoken");
const UserService = require("../modules/user/user.service");
const { secretKey } = require("../utils/envConfig");
const { AuthError } = require("../utils/error");

const auth = async (req, res, next) => {
  const authHeader = req.header("Authorization");
  try {
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, secretKey);
    const user = await UserService.getOne({ id: decoded.data });
    req.user = user;
    next();
  } catch (error) {
    throw AuthError();
  }
};

const authOptional = async (req, res, next) => {
  const authHeader = req.header("Authorization");
  try {
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, secretKey);
    if (decoded) {
      const user = await UserService.getOne({ id: decoded.data });
      req.user = user;
      next();
    } else {
      next();
    }
  } catch (error) {
    console.error(error);
    next();
  }
};

module.exports = { auth, authOptional };
