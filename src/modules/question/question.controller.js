import {
  create as _create,
  getAll as _getAll,
  createOption as _createOption,
  getOptionByQuestion,
  deleteOption as _deleteOption,
} from "./question.service.js";
import { isNullOrEmptyString } from "../../utils/helper.js";
import requiredValidator from "../../utils/validator.js";
import { ValidationError } from "../../utils/error.js";

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
    const newQuestion = await _create(payload);

    res.status(200).json({
      message: "success",
      data: newQuestion,
    });
  } catch (error) {
    next(error);
  }
};

const getAll = async (_, res, next) => {
  try {
    const allData = await _getAll();
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
    const data = await _createOption(payload);
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
    const data = await getOptionByQuestion(id);
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
    await _deleteOption(id);
    res.status(200).json({
      status: 200,
      message: "success",
    });
  } catch (error) {
    next(error);
  }
};

export { create, getAll, createOption, getOptions, deleteOption };
