const { User } = require("../models");

const { ServerError } = require("../utils/error");

const create = async (newUser) => {
  try {
    return await User.create(newUser);
  } catch (error) {
    console.log(error);
    throw new ServerError("Create data failed");
  }
};

const getAll = async () => {
  try {
    return await User.findAll();
  } catch (error) {
    throw new ServerError("Fetch Data failed");
  }
};

module.exports = { create, getAll };
