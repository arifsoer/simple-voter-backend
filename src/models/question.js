const sequelize = require("../config/sequelize");
const { DataTypes } = require("sequelize");

module.exports = sequelize.define(
  "Question",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    question: DataTypes.STRING,
    isPublic: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: "Questions",
  }
);
