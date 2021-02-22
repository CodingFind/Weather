'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {

    const { DataTypes } = Sequelize;

    await queryInterface.createTable('Cities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      averageTemperature: {
        type: DataTypes.INTEGER,
        defaultValue: null
      },
      requestCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });

    await queryInterface.addIndex('Cities', { fields: ['name'] });
    await queryInterface.addIndex('Cities', { fields: ['name', 'averageTemperature'] });
    await queryInterface.addIndex('Cities', { fields: ['requestCount'] });

  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Cities');
  }
};
