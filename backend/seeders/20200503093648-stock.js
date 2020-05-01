'use strict'
const Product = require('../models').Product
const faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const stocks = []
    for (let i = 1; i <= 2000; i++) {
      stocks.push({
        productId: i,
        quantity: faker.random.number({ min: 0, max: 100 }),
        purchasePrice: faker.commerce.price(),
        purchasedAt: faker.date.past(),
        expieredAt: faker.date.future(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
      })
    }
    return queryInterface.bulkInsert('stocks', stocks, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('stocks', null, {})
  },
}
