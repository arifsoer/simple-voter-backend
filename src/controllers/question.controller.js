const { QuestionService } = require("../services");
const { isNullOrEmptyString } = require("../utils/helper");

const create = async (req, res) => {
  const { question, isPublic } = req.body;

  if (isNullOrEmptyString(question) || isNullOrEmptyString(isPublic)) {
    res.status(400).json({
      message: "Bad Body Data input",
    });
    return;
  }

  try {
    const payload = {
      question,
      isPublic,
      userId: req.user.id,
    };
    const newQuestion = await QuestionService.create(payload);

    res.status(200).json({
      message: "success",
      data: newQuestion,
    });
  } catch (error) {
    console.log(error)
    res.status(error.status).json({
      status: error.status,
      message: error.message
    })
  }
};

const getAll = async (req, res) => {
  try {
    const allData = await QuestionService.getAll()
    res.status(200).json({
      status: 200,
      message: 'success',
      data: allData
    })
  } catch (error) {
    console.log(error)
    res.status(error.status).json({
      status: error.status,
      message: error.message
    })
  }
}

module.exports = { create, getAll };
