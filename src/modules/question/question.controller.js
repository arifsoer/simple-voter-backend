const QuestionService = require("./question.service");
const { isNullOrEmptyString } = require("../../utils/helper");
const { requiredValidator } = require("../../utils/validator");
const { ValidationError } = require("../../utils/error");

const create = async (req, res, next) => {
  const { question, isPublic } = req.body;

  if (isNullOrEmptyString(question) || isNullOrEmptyString(isPublic)) {
    throw new ValidationError("Check your question and isPublic");
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
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const allData = await QuestionService.getAll();
    res.status(200).json({
      status: 200,
      message: "success",
      data: allData,
    });
  } catch (error) {
    next(error);
  }
};

const createOption = async (req, res, next) => {
  try {
    const validatorResult = requiredValidator(req.body);
    if (validatorResult.isFail) {
      throw new ValidationError(validatorResult.messages);
    }

    const { id } = req.params;

    const payload = {
      questionId: id,
      name: req.body.name,
    };
    const data = await QuestionService.createOption(payload);
    res.status(200).json({
      status: 200,
      message: "success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

const getOptions = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await QuestionService.getOptionByQuestion(id);
    res.status(200).json({
      status: 200,
      message: "success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

const deleteOption = async (req, res, next) => {
  try {
    const { id } = req.params;
    await QuestionService.deleteOption(id);
    res.status(200).json({
      status: 200,
      message: "success",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { create, getAll, createOption, getOptions, deleteOption };
