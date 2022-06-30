import sequelize from "../../config/sequelize.js";
import { DataTypes } from "sequelize";

export default sequelize.define(
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
