const { Product } = require('../models')
const Sequelize = require('sequelize')

const getProducts = async (pageIndex, pageSize = 18, searchText) => {
  const whereOpt = {
    limit: pageSize,
    offset: pageIndex * pageSize,
  }
  if (searchText.length > 2) {
    whereOpt.where = {
      name: {
        [Sequelize.Op.like]: `%${searchText}%`,
      },
    }
  }
  const result = await Product.findAndCountAll(whereOpt)

  return {
    products: await Promise.all(
      result.rows.map(async (row) => {
        return {
          ...row.dataValues,
          images: await row.getImages(),
          likedUsers: await row.getLikedUsers(),
        }
      })
    ),
    count: result.count,
  }
}

const getProduct = async (id) => {
  const product = await Product.findOne({
    where: {
      id,
    },
  })

  return {
    ...product.dataValues,
  }
}

module.exports = {
  getProducts,
  getProduct,
}
