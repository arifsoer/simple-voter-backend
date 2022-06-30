import Question from "./question.model.js";
import QuestionOption from "./questionOption.model.js";
import { DatabaseError } from "../../utils/error.js";

const create = async (newQuestion) => {
  try {
    return await Question.create(newQuestion);
  } catch (error) {
    console.log(error);
    throw new DatabaseError("Create Data Failed");
  }
};

const getAll = async (where) => {
  try {
    return await Question.findAll({ where, order: [["id", "DESC"]] });
  } catch (error) {
    console.log(error);
    throw new DatabaseError("Failed Fething Data");
  }
};

const getOne = async (where) => {
  try {
    return await Question.findOne({ where });
  } catch (error) {
    console.log(error);
    throw new DatabaseError("Failed Fetching Data");
  }
};

const deleteQuestion = async (id) => {
  try {
    return await QuestionOption.destroy({ where: { id } });
  } catch (error) {
    console.log(error);
    throw new DatabaseError("Failed Delete Data");
  }
};

const createOption = async (newOption) => {
  try {
    return await QuestionOption.create(newOption);
  } catch (error) {
    console.log(error);
    throw new DatabaseError("Failed Create Data");
  }
};

const getOptionByQuestion = async (questionId) => {
  try {
    return await QuestionOption.findAll({ where: { questionId } });
  } catch (error) {
    console.log(error);
    throw new DatabaseError("Failed Fethcing Data");
  }
};

const deleteOption = async (id) => {
  try {
    return await QuestionOption.destroy({ where: { id }, logging: console.log });
  } catch (error) {
    console.log(error);
    throw new DatabaseError("Failed Delete Data");
  }
};

export {
  create,
  getAll,
  getOne,
  createOption,
  getOptionByQuestion,
  deleteQuestion,
  deleteOption,
};
