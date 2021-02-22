'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {

    const { DataTypes } = Sequelize;

    await queryInterface.createTable('WeatherData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      cityId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Cities',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      date: {
        type: DataTypes.DATEONLY,
        defaultValue: null
      },
      data: {
        type: DataTypes.JSONB,
        defaultValue: {}
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

    await queryInterface.addIndex('WeatherData', { fields: ['cityId', 'date'] });

  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('WeatherData');
  }
};
