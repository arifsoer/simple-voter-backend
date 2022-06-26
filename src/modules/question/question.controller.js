const QuestionService = require("./question.service");
const { isNullOrEmptyString } = require("../../utils/helper");
const { ValidationError } = require("../../utils/error");

const create = async (req, res, next) => {
  const { question, isPublic } = req.body;

  if (isNullOrEmptyString(question) || isNullOrEmptyString(isPublic)) {
    throw new ValidationError('Check your question and isPublic')
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
    next(error)
  }
};

const getAll = async (req, res, next) => {
  try {
    const allData = await QuestionService.getAll()
    res.status(200).json({
      status: 200,
      message: 'success',
      data: allData
    })
  } catch (error) {
    next(error)
  }
}

const createOption = async (req, res, next) => {
  try {
    
  } catch (error) {
    next(error)
  }
}

module.exports = { create, getAll };
