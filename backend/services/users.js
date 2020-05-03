const User = require('../models').User
const { hash, compare } = require('../helpers/bcrypt')
const jwt = require('jsonwebtoken')
const axios = require('axios')
const _ = require('lodash')
const { transporter, resetPasswordTemplate } = require('../helpers/email')

const checkRecaptcha = async (recaptcha) => {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptcha}`
  const result = await axios.post(url)
  return result.data.success
}

const isEmailExist = async (email) => {
  const user = await User.findOne({
    where: {
      email,
    },
  })

  return user
}

const createUser = async ({ email, password }) => {
  return await User.create({
    email,
    password: hash(password),
  })
}

const checkUser = async ({ user, password }) => {
  if (compare(password, user.password)) {
    return jwt.sign(user.id, process.env.JWT_SECRET)
  }
  return false
}

const changePassword = async (authUser, password, newPassword) => {
  if (compare(password, authUser.password)) {
    return await authUser.update({
      password: hash(newPassword),
    })
  }
}

const sendResetPasswordEmail = async (user) => {
  const verificationCode = _.random(100000, 999999)

  await user.update({
    passwordResetToken: verificationCode,
  })

  const emailTemplate = resetPasswordTemplate(user, verificationCode)
  try {
    await transporter.sendMail(emailTemplate)
  } catch (err) {
    return false
  }
  return true
}

module.exports = {
  isEmailExist,
  createUser,
  checkUser,
  changePassword,
  checkRecaptcha,
  sendResetPasswordEmail,
}
