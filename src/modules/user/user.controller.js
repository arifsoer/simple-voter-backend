import {create, getOne} from "./user.service.js";
import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";

import { isNullOrEmptyString } from "../../utils/helper.js";
import { secretKey } from "../../utils/envConfig.js";
import { ValidationError, AuthError, DatabaseError } from "../../utils/error.js";

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
    const passwordHashed = await hash(password, saltRound);

    const newUser = {
      fullName: fullName,
      password: passwordHashed,
      email,
    };
    const userDb = await create(newUser);
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
    const user = await getOne({ email });
    const isPasswordMatch = await compare(password, user.password);
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

const getMe = async (req, res, next) => {
  try {
    const user = await getOne({id: req.user.id})
    res.status(200).json({
      status: 200,
      message: "success",
      data: {
        user
      }
    })
  } catch (error) {
    next(error)
  }
}

export { register, login, getMe };
