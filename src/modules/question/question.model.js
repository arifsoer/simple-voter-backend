import { define } from "../../config/sequelize";
import { DataTypes } from "sequelize";
import QuestionOption from './questionOption.model';

const model = define(
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
