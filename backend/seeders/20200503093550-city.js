'use strict'
const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    const cities = []

    for (let i = 0; i < 20; i++) {
      cities.push({
        country: 'US',
        city: faker.address.city(),
        postalCode: faker.address.zipCode(),
        freeDeliveryPrice: 50,
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
      })
    }
    return queryInterface.bulkInsert('cities', cities, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cities', null, {})
  },
}
