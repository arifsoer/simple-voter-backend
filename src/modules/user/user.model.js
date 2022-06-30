import sequelize from "../../config/sequelize.js";
import { DataTypes } from "sequelize";

export default sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: "Users",
    defaultScope: {
      attributes: { exclude: ["password"] },
    },
  }
);
