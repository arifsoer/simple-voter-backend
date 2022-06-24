const router = require("express").Router();
const { create, getAll } = require("../controllers/question.controller");
const { auth, authOptional } = require("../middlewares/auth.middlewares");

router.post("/", auth, create);
router.get("/", auth, getAll)

module.exports = router
