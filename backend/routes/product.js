const router = require('koa-router')()
const { getProducts, getProduct } = require('../services/products')
const {
  ProductCollection,
  ProductResource,
} = require('../resources/ProductResource')

router.prefix('/api/products')

router.get('/', async (ctx, next) => {
  let { pageIndex = 1, pageSize = 18, searchText = '' } = ctx.request.query
  pageIndex = pageIndex < 1 ? 1 : pageIndex
  const { products, count } = await getProducts(
    pageIndex - 1,
    pageSize,
    searchText
  )

  ctx.body = await ProductCollection(products, count, pageIndex, pageSize)
})

router.get('/:id', async (ctx, next) => {
  const id = ctx.params.id
  const product = await getProduct(id)
  ctx.body = await ProductResource(product)
})

module.exports = router
