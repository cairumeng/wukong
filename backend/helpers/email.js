/*
邮件发送的配置文件
*/
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: process.env.EMAIL_LOGIN,
    pass: process.env.EMAIL_PASSWORD,
  },
  debug: process.env.EMAIL_DEBUG,
  // logger: process.env.EMAIL_DEBUG,
})

const resetPasswordTemplate = (user, verificationCode) => {
  const from = process.env.EMAIL_LOGIN
  const to = user.email
  const subject = '🌻 Wukong React Password Reset 🌻'
  const html = `
    <p>dear client,</p>
    <p>We heard that you lost your Wukong React password. Sorry about that!</p>
    <p>here is your verification code:${verificationCode}</p>

    <p>Do something outside today! </p>
    <p>–Your friends at Wukong React </p>
    `
  return { from, to, subject, html }
}

module.exports = { transporter, resetPasswordTemplate }
