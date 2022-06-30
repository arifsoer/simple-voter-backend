// user router
import { Router } from "express";
import { register, login, getMe } from "./user.controller.js";
import {auth} from "../../middlewares/auth.middlewares.js"

const userRouter = Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/me", auth, getMe)

export default userRouter;
