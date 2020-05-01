'use strict'
const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    const users = []
    for (let i = 0; i <= 50; i++) {
      users.push({
        email: faker.internet.email(),
        password: faker.internet.password(),
        passwordResetToken: null,
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
      })
    }
    return queryInterface.bulkInsert('users', users, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  },
}
