'use strict'

const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    const categories = []
    const names = [
      {
        id: 1,
        name: 'fruit&vegetable',
        parent: null,
      },
      {
        id: 2,
        name: 'fruit',
        parent: 1,
      },
      {
        id: 3,
        name: 'vegetable',
        parent: 1,
      },
      {
        id: 4,
        name: 'meat',
        parent: null,
      },
      {
        id: 5,
        name: 'porc',
        parent: 4,
      },
      {
        id: 6,
        name: 'beef',
        parent: 4,
      },
      {
        id: 7,
        name: 'chicken',
        parent: 4,
      },
      {
        id: 8,
        name: 'seafood',
        parent: null,
      },
      {
        id: 9,
        name: 'snack',
        parent: null,
      },
      {
        id: 10,
        name: 'drink',
        parent: null,
      },
      {
        id: 11,
        name: 'beer',
        parent: 10,
      },
      {
        id: 12,
        name: 'vin',
        parent: 10,
      },
    ]
    for (let i = 0; i < names.length; i++) {
      const category = names[i]

      categories.push({
        id: category.id,
        position: i,
        isDisplayedFrontpage: true,
        parentCategoryId: category.parent,
        status: 1,
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
      })
    }
    return queryInterface.bulkInsert('categories', categories, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {})
  },
}
