'use strict'
module.exports = (sequelize, DataTypes) => {
  const OrderProduct = sequelize.define(
    'OrderProduct',
    {
      orderId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      quantity: DataTypes.DECIMAL,
      price: DataTypes.DECIMAL,
    },
    {}
  )
  OrderProduct.associate = function (models) {
    // associations can be defined here
  }
  return OrderProduct
}
