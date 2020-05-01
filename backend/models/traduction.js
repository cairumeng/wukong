'use strict'
module.exports = (sequelize, DataTypes) => {
  const Traduction = sequelize.define(
    'Traduction',
    {
      type: DataTypes.STRING,
      typeId: DataTypes.INTEGER,
      text: DataTypes.STRING,
      language: DataTypes.STRING,
    },
    {}
  )
  Traduction.associate = function (models) {
    // associations can be defined here
  }
  return Traduction
}
