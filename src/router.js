import { Router } from "express"

import user from "./modules/user/user.router.js";
import question from "./modules/question/question.router.js";

const router = Router()

router.use("/user", user);
router.use("/question", question)

export default router;
