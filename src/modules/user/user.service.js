import User from "./user.model.js";

import { DatabaseError } from "../../utils/error.js";

const create = async (newUser) => {
  try {
    return await User.create(newUser);
  } catch (error) {
    throw new DatabaseError("Create data failed");
  }
};

const getAll = async () => {
  try {
    return await User.findAll();
  } catch (error) {
    throw new DatabaseError("Fetch Data failed");
  }
};

const getOne = async (whereClause) => {
  try {
    return await User.findOne({where: whereClause});
  } catch (error) {
    throw new DatabaseError("Fetch Data failed");
  }
}

export { create, getAll, getOne };
