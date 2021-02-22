'use strict';
const now = new Date();

module.exports = {

  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Cities', [
      { name: 'Amsterdam', createdAt: now, updatedAt: now },
      { name: 'Athens', createdAt: now, updatedAt: now },
      { name: 'Berlin', createdAt: now, updatedAt: now },
      { name: 'Bern', createdAt: now, updatedAt: now },
      { name: 'Bratislava', createdAt: now, updatedAt: now },
      { name: 'Brussels', createdAt: now, updatedAt: now },
      { name: 'Bucharest', createdAt: now, updatedAt: now },
      { name: 'Budapest', createdAt: now, updatedAt: now },
      { name: 'Copenhagen', createdAt: now, updatedAt: now },
      { name: 'Dublin', createdAt: now, updatedAt: now },
      { name: 'Helsinki', createdAt: now, updatedAt: now },
      { name: 'Kiev', createdAt: now, updatedAt: now },
      { name: 'Lisbon', createdAt: now, updatedAt: now },
      { name: 'Ljubljana', createdAt: now, updatedAt: now },
      { name: 'London', createdAt: now, updatedAt: now },
      { name: 'Luxembourg', createdAt: now, updatedAt: now },
      { name: 'Madrid', createdAt: now, updatedAt: now },
      { name: 'Minsk', createdAt: now, updatedAt: now },
      { name: 'Monaco', createdAt: now, updatedAt: now },
      { name: 'Moscow', createdAt: now, updatedAt: now },
      { name: 'Nicosia', createdAt: now, updatedAt: now },
      { name: 'Oslo', createdAt: now, updatedAt: now },
      { name: 'Paris', createdAt: now, updatedAt: now },
      { name: 'Reykjavik', createdAt: now, updatedAt: now },
      { name: 'Riga', createdAt: now, updatedAt: now },
      { name: 'Rome', createdAt: now, updatedAt: now },
      { name: 'Sofia', createdAt: now, updatedAt: now },
      { name: 'Stockholm', createdAt: now, updatedAt: now },
      { name: 'Tallinn', createdAt: now, updatedAt: now },
      { name: 'Vienna', createdAt: now, updatedAt: now },
      { name: 'Vilnius', createdAt: now, updatedAt: now },
      { name: 'Warsaw', createdAt: now, updatedAt: now },
      { name: 'Zagreb', createdAt: now, updatedAt: now }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Cities', null, {});
  }
};
