const Question = require("./question.model");
const QuestionOption = require("./questionOption.model");
const { ServerError } = require("../../utils/error");

const create = async (newQuestion) => {
  try {
    return await Question.create(newQuestion);
  } catch (error) {
    console.log(error);
    throw ServerError("Create Data Failed");
  }
};

const getAll = async (where) => {
  try {
    return await Question.findAll({ where, order: [["id", "DESC"]] });
  } catch (error) {
    console.log(error);
    throw ServerError("Failed Fething Data");
  }
};

const getOne = async (where) => {
  try {
    return await Question.findOne({ where });
  } catch (error) {
    console.log(error);
    throw ServerError("Failed Fetching Data");
  }
};

const deleteQuestion = async (id) => {
  try {
    return await QuestionOption.destroy({ where: { id } });
  } catch (error) {
    console.log(error);
    throw ServerError("Failed Delete Data");
  }
};

const createOption = async (newOption) => {
  try {
    return await QuestionOption.create(newOption);
  } catch (error) {
    console.log(error);
    throw ServerError("Failed Create Data");
  }
};

const getOptionByQuestion = async (questionId) => {
  try {
    return await QuestionOption.findAll({ where: { questionId } });
  } catch (error) {
    console.log(error);
    throw ServerError("Failed Fethcing Data");
  }
};

const deleteOption = async (id) => {
  try {
    return await QuestionOption.destroy({where: {id}})
  } catch (error) {
    console.log(error)
    throw ServerError('Failed Delete Data')
  }
}

module.exports = {
  create,
  getAll,
  getOne,
  createOption,
  getOptionByQuestion,
  deleteQuestion,
  deleteOption,
};
