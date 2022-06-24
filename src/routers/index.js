const router = require("express").Router();

const user = require("./user.router");
const question = require("./question.router");

router.use("/user", user);
router.use("/question", question)

module.exports = router;
