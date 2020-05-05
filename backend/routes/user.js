const router = require('koa-router')()
const { UserResource } = require('../resources/UserResource')
const { changePassword } = require('../services/users')
const checkAuth = require('../middlewares/checkAuth')
const validate = require('../middlewares/validate')
const changePasswordValidator = require('../validators/changePasswordValidator')
router.prefix('/api/user')

router.get('/profile', checkAuth, async (ctx, next) => {
  ctx.body = UserResource(ctx.authUser)
})

router.post(
  '/changePassword',
  checkAuth,
  validate(changePasswordValidator),
  async (ctx, next) => {
    const authUser = ctx.authUser

    const { password, newPassword } = ctx.request.body

    if (password) {
      const result = await changePassword(authUser, password, newPassword)
      if (result) {
        ctx.body = UserResource(authUser)
      } else {
        ctx.status = 401
        ctx.body = {
          errors: {
            password: 'password is not correct',
          },
        }
      }
    }
  }
)

module.exports = router
