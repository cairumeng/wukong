'use strict'
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define(
    'Address',
    {
      userId: DataTypes.INTEGER,
      isDefault: DataTypes.BOOLEAN,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      phone: DataTypes.STRING,
      cityId: DataTypes.INTEGER,
      address: DataTypes.STRING,
      lat: DataTypes.DECIMAL,
      lng: DataTypes.DECIMAL,
    },
    {}
  )
  Address.associate = function (models) {
    // associations can be defined here
  }
  return Address
}
