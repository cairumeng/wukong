'use strict'
const faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const traductions = []

    for (let i = 1; i <= 2000; i++) {
      traductions.push({
        type: 'productName',
        typeId: i,
        text: faker.commerce.productName(),
        language: 'en',
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
      })

      traductions.push({
        type: 'productUnit',
        typeId: i,
        text: faker.commerce.productAdjective(),
        language: 'en',
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
      })

      traductions.push({
        type: 'productName',
        typeId: i,
        text: '中文_' + faker.commerce.productName(),
        language: 'zh',
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
      })

      traductions.push({
        type: 'productUnit',
        typeId: i,
        text: faker.random.arrayElement(['个', '只', 'kg']),
        language: 'zh',
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
      })
    }

    for (let i = 1; i <= 12; i++) {
      traductions.push({
        type: 'categoryName',
        typeId: i,
        text: '中文_' + faker.commerce.department(),
        language: 'zh',
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
      })

      traductions.push({
        type: 'categoryName',
        typeId: i,
        text: faker.commerce.department(),
        language: 'en',
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
      })
    }
    return queryInterface.bulkInsert('traductions', traductions, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('traductions', null, {})
  },
}
