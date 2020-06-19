const router = require('koa-router')()
const checkAuth = require('../middlewares/checkAuth')
const validate = require('../middlewares/validate')
const { getCities, createAddress } = require('../services/address')
const { CityCollection } = require('../resources/CityResource')
router.prefix('/api/address')

router.post('/', checkAuth, async (ctx, next) => {
  const { cityId, firstName, lastName, lat, lng, phone } = ctx.request.body
  const userId = ctx.authUser.dataValues.id

  ctx.body = await createAddress({
    userId,
    cityId,
    firstName,
    lastName,
    lat,
    lng,
    phone,
  })
})

router.get('/cities', async (ctx, next) => {
  const { q } = ctx.request.query
  ctx.body = CityCollection(await getCities(q))
})

module.exports = router
