'use strict'
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    'Image',
    {
      url: DataTypes.STRING,
      type: DataTypes.STRING,
      typeId: DataTypes.INTEGER,
    },
    {}
  )
  Image.associate = function (models) {}
  return Image
}
