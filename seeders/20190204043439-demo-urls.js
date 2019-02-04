'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Urls', [
      {
        url: 'http://expressjs.com/en/starter/basic-routing.html',
        userId: 1,
        score: 4,
        createdAt:'03-02-2019',
        updatedAt:'03-02-2019',
      },
      {
        url: 'http://expressjs.com/en/starter/basic-routing.html',
        userId: 1,
        score: 3,
        createdAt:'03-02-2019',
        updatedAt:'03-02-2019',
      },
      {
        url: 'http://expressjs.com/en/starter/basic-routing.html',
        userId: 1,
        score: 5,
        createdAt:'03-02-2019',
        updatedAt:'03-02-2019',
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Urls', null, {});
  }
};
