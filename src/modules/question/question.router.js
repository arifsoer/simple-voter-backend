import { Router } from "express"
import { create, getAll, createOption, getOptions, deleteOption } from "./question.controller.js";
import { auth, authOptional } from "../../middlewares/auth.middlewares.js";

const router = Router()

router.post("/", auth, create);
router.get("/", auth, getAll);

router.post("/:id/option", auth, createOption);
router.get("/:id/option", auth, getOptions);
router.delete("/option/:id", auth, deleteOption);

export default router;
