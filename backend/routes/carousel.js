const router = require('koa-router')()
const { getCarouselImages } = require('../services/carousels')

router.prefix('/api/')
router.get('/carousel', async (ctx, next) => {
  ctx.body = await getCarouselImages()
})

module.exports = router
