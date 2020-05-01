'use strict'
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define(
    'City',
    {
      country: DataTypes.STRING,
      city: DataTypes.STRING,
      postalCode: DataTypes.STRING,
      freeDeliveryPrice: DataTypes.INTEGER,
    },
    {}
  )
  City.associate = function (models) {
    // associations can be defined here
  }
  return City
}
