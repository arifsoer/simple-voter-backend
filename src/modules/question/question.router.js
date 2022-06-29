const router = require("express").Router();
const {
  create,
  getAll,
  createOption,
  getOptions,
  deleteOption
} = require("./question.controller");
const { auth, authOptional } = require("../../middlewares/auth.middlewares");

router.post("/", auth, create);
router.get("/", auth, getAll);

router.post("/:id/option", auth, createOption);
router.get("/:id/option", auth, getOptions);
router.delete("/option/:id", auth, deleteOption);

module.exports = router;
