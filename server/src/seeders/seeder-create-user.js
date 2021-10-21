'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@email.com',
      password: '123456',
      firstName: 'Du',
      lastName: 'Dev',
      address: 'Ha Noi',
      phoneNumber: '0123456',
      gender: 1,
      image : '',
      roleId: 'R1',
      positionId :'',

      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
