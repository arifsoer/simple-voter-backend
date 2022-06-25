"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("QuestionOptions", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      questionId: Sequelize.INTEGER,
      name: Sequelize.STRING,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("QuestionOptions");
  },
};
