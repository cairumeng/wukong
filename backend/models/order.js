'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userId: DataTypes.INTEGER,
    totalPrice: DataTypes.INTEGER,
    payment: DataTypes.STRING,
    addressId: DataTypes.INTEGER,
    deliveryAt: DataTypes.DATE,
    deliveryInterval: DataTypes.STRING,
    deliveryFee: DataTypes.DECIMAL,
    status: DataTypes.INTEGER
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};