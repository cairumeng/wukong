/**
 * 生成 json schema 验证的中间件
 * @param {function} validateFn 验证函数
 * @returns {function} middleWare
 */
validate = (validateFn) => {
  // 定义中间件函数
  return async (ctx, next) => {
    const data = ctx.request.body
    const result = validateFn(data)
    if (result && result.length > 0) {
      // 验证失败
      ctx.status = 422
      const errors = {}
      result.forEach((e) => {
        errors[e.dataPath.substring(1)] = e.message
      })
      ctx.body = {
        errors,
      }
      return
    }
    // 验证成功，继续
    await next()
  }
}

module.exports = validate
