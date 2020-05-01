'use strict'
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define(
    'Cart',
    {
      userId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      quantity: DataTypes.DECIMAL,
    },
    {}
  )
  Cart.associate = function (models) {
    // associations can be defined here
  }
  return Cart
}
