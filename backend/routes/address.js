const router = require('koa-router')()
const checkAuth = require('../middlewares/checkAuth')
const validate = require('../middlewares/validate')
const {
  getCities,
  createAddress,
  getAddresses,
} = require('../services/address')
const { CityCollection } = require('../resources/CityResource')
const { AddressCollection } = require('../resources/AddressResource')
router.prefix('/api/address')

router.post('/', checkAuth, async (ctx, next) => {
  const {
    cityId,
    firstName,
    lastName,
    address,
    lat,
    lng,
    phone,
  } = ctx.request.body

  const userId = ctx.authUser.dataValues.id

  ctx.body = await createAddress({
    userId,
    cityId,
    firstName,
    lastName,
    address,
    lat,
    lng,
    phone,
  })
})

router.get('/', checkAuth, async (ctx, next) => {
  const userId = ctx.authUser.dataValues.id
  ctx.body = await AddressCollection(await getAddresses(userId))
})

router.get('/cities', async (ctx, next) => {
  const { q } = ctx.request.query
  ctx.body = CityCollection(await getCities(q))
})

module.exports = router
