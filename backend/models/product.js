'use strict'
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product',
    {
      price: DataTypes.INTEGER,
      unit: DataTypes.DECIMAL,
      discount: DataTypes.DECIMAL,
      startedAt: DataTypes.DATE,
      status: DataTypes.INTEGER,
    },
    {}
  )
  Product.associate = function (models) {
    // associations can be defined here
    //产品和图片
    Product.hasMany(models.Image, {
      foreignKey: 'typeId',
      constraints: false,
      as: 'images',
      scope: {
        type: 'productImage',
      },
    })

    Product.hasOne(models.Traduction, {
      foreignKey: 'typeId',
      constraints: false,
      scope: {
        type: 'productName',
      },
      as: 'name',
    })

    Product.hasOne(models.Traduction, {
      foreignKey: 'typeId',
      constraints: false,
      scope: {
        type: 'productUnit',
      },
      as: 'productUnit',
    })

    Product.addScope('defaultScope', {
      include: [
        {
          model: models.Image,
          attributes: ['url'],
          as: 'images',
        },
        {
          model: models.Traduction,
          as: 'name',
          attributes: ['text'],
          where: {
            language: 'zh',
          },
        },
        {
          model: models.Traduction,
          as: 'productUnit',
          attributes: ['text'],
          where: {
            language: 'zh',
          },
        },
      ],
    })
  }
  return Product
}
