const router = require('koa-router')()
const {
  isEmailExist,
  checkRecaptcha,
  createUser,
  checkUser,
  changePassword,
  sendResetPasswordEmail,
} = require('../services/users')
const { UserResource } = require('../resources/UserResource')
const registerValidator = require('../validators/registerValidator')
const validate = require('../middlewares/validate')

router.prefix('/api/auth')

router.post('/register', validate(registerValidator), async (ctx, next) => {
  const { email, password, recaptcha } = ctx.request.body

  const isRecaptchaValid = await checkRecaptcha(recaptcha)
  if (!isRecaptchaValid) {
    ctx.status = 422
    ctx.body = {
      errors: {
        recaptcha: 'please check your recaptcha',
      },
    }
    return
  }

  const user = await isEmailExist(email)
  if (user) {
    ctx.status = 422
    ctx.body = {
      errors: {
        email: 'email does exist',
      },
    }
    return
  }
  ctx.body = UserResource(await createUser({ email, password }))
})

router.post('/login', async (ctx, next) => {
  const { email, password } = ctx.request.body
  const user = await isEmailExist(email)

  if (!user) {
    ctx.status = 422
    ctx.body = {
      errors: {
        email: 'email does not exist',
      },
    }
    return
  }

  const token = await checkUser({ user, password })

  if (token) {
    ctx.body = token
  } else {
    ctx.status = 401
    ctx.body = {
      errors: {
        password: 'password is not correct',
      },
    }
  }
})

router.post('/forget', async (ctx, next) => {
  const { email } = ctx.request.body
  const user = await isEmailExist(email)

  if (user) {
    const result = sendResetPasswordEmail(user)
    if (result) {
      ctx.status = 200
      ctx.body = {
        email: 'email success',
      }
    } else {
      ctx.status = 500
      ctx.body = {
        errors: {
          email: 'email send with error',
        },
      }
    }
  } else {
    ctx.status = 404
    ctx.body = {
      errors: {
        email: 'email not exist',
      },
    }
  }
})

router.post('/reset', async (ctx, next) => {
  const { email, verificationCode, newPassword } = ctx.request.body
  const user = await isEmailExist(email)
  if (user.passwordResetToken == verificationCode) {
    await changePassword(user, newPassword)
    ctx.status = 200
  } else {
    ctx.status = 500
    ctx.body = {
      errors: {
        verificationCode: 'verification code is not correct',
      },
    }
  }
})

module.exports = router
