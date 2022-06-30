import sequelize from "../../config/sequelize.js";
import { DataTypes } from "sequelize";
import QuestionOption from './questionOption.model.js';

const model = sequelize.define(
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

model.hasMany(QuestionOption, {
  as: 'options',
  foreignKey: 'questionId'
})

export default model
