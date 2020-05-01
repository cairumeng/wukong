'use strict'
const { Product, Category } = require('../models')
const faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const productCategories = []

    for (let i = 1; i <= 2000; i++) {
      productCategories.push({
        productId: i,
        categoryId: faker.random.number({ min: 1, max: 12 }),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
      })
    }
    return queryInterface.bulkInsert('productCategories', productCategories, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('productCategories', null, {})
  },
}
