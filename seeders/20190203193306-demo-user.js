'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', 
    [
      {
        email: 'user1@hotmail.com',
        password: 'holamundo',
        createdAt:'03-02-2019',
        updatedAt:'03-02-2019',
      },
      {
        email: 'user2@hotmail.com',
        password: 'holamundo',
        createdAt:'03-02-2019',
        updatedAt:'03-02-2019',
      },
      {
        email: 'user3@hotmail.com',
        password: 'holamundo',
        createdAt:'03-02-2019',
        updatedAt:'03-02-2019',
      },
      {
        email: 'user4@hotmail.com',
        password: 'holamundo',
        createdAt:'03-02-2019',
        updatedAt:'03-02-2019'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};