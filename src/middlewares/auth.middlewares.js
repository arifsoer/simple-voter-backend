import { verify } from "jsonwebtoken";
import { getOne } from "../modules/user/user.service";
import { secretKey } from "../utils/envConfig";
import { AuthError } from "../utils/error";

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

export default { auth, authOptional };
