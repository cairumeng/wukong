const Koa = require('koa')
const app = new Koa()
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa2-cors')
const dotenv = require('dotenv')
dotenv.config() // 把.env文件里的参数放到nodejs自带的process.env中

require('./cache/redis')

const getAuthUser = require('./middlewares/getAuthUser')
//路由引入
const auth = require('./routes/auth')
const uploader = require('./routes/uploader')
const user = require('./routes/user')
const product = require('./routes/product')
const category = require('./routes/category')
const carousel = require('./routes/carousel')
const address = require('./routes/address')

// error handler
onerror(app)

// middlewares

app.use(cors()) //跨域名
app.use(
  bodyparser({
    enableTypes: ['json', 'form', 'text'],
  })
) //将前台的text格式转化成json或者form格式

app.use(logger()) //在终端打印api请求信息

app.use(getAuthUser) //把有效的token转化成user

// routes
app.use(auth.routes(), auth.allowedMethods())
app.use(uploader.routes(), uploader.allowedMethods())
app.use(user.routes(), user.allowedMethods())
app.use(product.routes(), product.allowedMethods())
app.use(category.routes(), category.allowedMethods())
app.use(carousel.routes(), carousel.allowedMethods())
app.use(address.routes(), address.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

module.exports = app
