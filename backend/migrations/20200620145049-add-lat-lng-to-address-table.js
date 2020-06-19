'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn(
          'Addresses',
          'lng',
          {
            type: Sequelize.DECIMAL,
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          'Addresses',
          'lat',
          {
            type: Sequelize.DECIMAL,
          },
          { transaction: t }
        ),
      ])
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn('Addresses', 'lat', { transaction: t }),
        queryInterface.removeColumn('Addresses', 'lng', {
          transaction: t,
        }),
      ])
    })
  },
}
