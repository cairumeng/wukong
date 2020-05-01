'use strict'
module.exports = (sequelize, DataTypes) => {
  const Stock = sequelize.define(
    'Stock',
    {
      productId: DataTypes.INTEGER,
      quantity: DataTypes.DECIMAL,
      purchasePrice: DataTypes.INTEGER,
      purchasedAt: DataTypes.DATE,
      expieredAt: DataTypes.DATE,
    },
    {}
  )
  Stock.associate = function (models) {
    // associations can be defined here
  }
  return Stock
}
