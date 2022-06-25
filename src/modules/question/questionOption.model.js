const sequelize = require("../../config/sequelize");
const { DataTypes } = require("sequelize");

module.exports = sequelize.define(
  "QuestionOption",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    questionId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: "QuestionOptions",
  }
);
