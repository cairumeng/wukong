const { ProductCollection } = require('./ProductResource')

const CategoryResource = (category) => {
  // 单个对象
  return {
    id: category.id,
    name: category.name && category.name.text,
    image: category.image && category.image.url,
    products: category.products ? ProductCollection(category.products) : [],
  }
}

const CategoryCollection = (categories) => {
  return {
    categories: categories.map((category) => CategoryResource(category)),
  }
}

module.exports = {
  CategoryResource,
  CategoryCollection,
}
