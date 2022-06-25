const router = require("express").Router();

const user = require("./modules/user/user.router");
const question = require("./modules/question/question.router");

router.use("/user", user);
router.use("/question", question)

module.exports = router;
