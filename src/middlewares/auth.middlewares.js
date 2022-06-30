import jwt from "jsonwebtoken"
const {verify} = jwt
import { getOne } from "../modules/user/user.service.js";
import { secretKey } from "../utils/envConfig.js";
import { AuthError } from "../utils/error.js";

const auth = async (req, _, next) => {
  try {
    const authHeader = req.header("Authorization");
    const token = authHeader.split(" ")[1];
    const decoded = verify(token, secretKey);
    const user = await getOne({ id: decoded.data });
    req.user = user;
    next();
  } catch (error) {
    console.log(error)
    next(new AuthError());
  }
};

const authOptional = async (req, res, next) => {
  const authHeader = req.header("Authorization");
  try {
    const token = authHeader.split(" ")[1];
    const decoded = verify(token, secretKey);
    if (decoded) {
      const user = await getOne({ id: decoded.data });
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

export { auth, authOptional };
