const router = require('koa-router')()
const {
  getCategories,
  getHomeCategories,
  getCategoryProducts,
} = require('../services/categories')
const {
  CategoryCollection,
  CategoryResource,
} = require('../resources/CategoryResource')
const { ProductCollection } = require('../resources/ProductResource')

router.prefix('/api/categories')

router.get('/', async (ctx, next) => {
  const categories = await getHomeCategories()
  ctx.body = CategoryCollection(categories)
})

router.get('/:id', async (ctx, next) => {
  let { pageIndex = 0, pageSize = 18 } = ctx.request.query
  const id = ctx.params.id
  const result = await getCategoryProducts(id, pageIndex, pageSize)

  const category = CategoryResource(result.category)

  category.products = ProductCollection(
    result.products,
    result.count,
    pageIndex,
    pageSize
  )
  ctx.body = category
})

module.exports = router
