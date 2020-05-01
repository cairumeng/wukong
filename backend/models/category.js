'use strict'
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
    {
      position: DataTypes.INTEGER,
      isDisplayedFrontpage: DataTypes.BOOLEAN,
      parentCategoryId: DataTypes.INTEGER,
      status: DataTypes.INTEGER,
    },
    {}
  )

  Category.associate = function (models) {
    Category.hasOne(models.Traduction, {
      foreignKey: 'typeId',
      constraints: false,
      scope: {
        type: 'categoryName',
      },
      as: 'name',
    })

    Category.hasOne(models.Image, {
      foreignKey: 'typeId',
      constraints: false,
      scope: {
        type: 'categoryImage',
      },
      as: 'image',
    })

    // N:M
    Category.belongsToMany(models.Product, {
      through: models.ProductCategory,
      foreignKey: 'categoryId',
      otherKey: 'productId',
      as: 'products',
      onDelete: 'cascade',
    })

    // Scope
    Category.addScope('defaultScope', {
      include: [
        {
          model: models.Traduction,
          as: 'name',
          attributes: ['text'],
          where: {
            language: 'zh',
          },
        },
        {
          model: models.Image,
          as: 'image',
          attributes: ['url'],
        },
      ],
    })

    Category.addScope('products', {
      include: [
        {
          model: models.Product,
          as: 'products',
        },
      ],
    })
  }

  return Category
}
