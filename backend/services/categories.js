const redis = require('../cache/redis')
const Sequelize = require('Sequelize')

const HOME_CATEGORIES = 'HOME_CATEGORIES'
const {
  Category,
  ProductCategory,
  Product,
  User,
  ProductImage,
} = require('../models')

const getHomeCategories = async () => {
  const cache = await redis.get(HOME_CATEGORIES)

  if (cache) {
    return cache
  }

  let categories = await Category.findAll({
    where: { status: 1, isDisplayedFrontpage: 1 },
  })

  categories = await Promise.all(
    categories.map(async (category) => ({
      ...category.dataValues,
      products: await category.getProducts({
        order: [['id', 'DESC']],
        limit: 8,
      }),
    }))
  )
  redis.set(HOME_CATEGORIES, categories, 60 * 60)
  return categories
}

const getCategories = async () => {
  return await Category.findAll({
    where: { status: 1 },
  })
}

const getCategoryProducts = async (id, pageIndex, pageSize) => {
  const category = await Category.findOne({
    where: { id },
  })
  const products = await category.getProducts({
    limit: pageSize,
    offset: pageIndex * pageSize,
  })

  const count = await category.countProducts()

  return {
    category,
    products,
    count,
  }
}

module.exports = {
  getHomeCategories,
  getCategories,
  getCategoryProducts,
}
