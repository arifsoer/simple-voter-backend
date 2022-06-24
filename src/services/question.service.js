const { Question } = require("../models");
const { ServerError } = require("../utils/error");

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

module.exports = { create, getAll, getOne };
