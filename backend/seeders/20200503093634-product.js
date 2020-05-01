'use strict'
const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    const products = []
    const discounts = [null, 0.1, 0.15]

    for (let i = 0; i < 2000; i++) {
      products.push({
        price: faker.commerce.price(),
        unit: faker.random.arrayElement([0.5, 1]),
        discount: faker.random.arrayElement(discounts),
        startedAt: faker.date.past(),
        status: 1,
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
      })
    }
    return queryInterface.bulkInsert('products', products, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {})
  },
}
