const validate = require('./validate')

// 校验规则
const SCHEMA = {
  type: 'object',
  properties: {
    email: {
      format: 'email',
    },
    password: {
      type: 'string',
      maxLength: 255,
      minLength: 6,
    },
    recaptcha: {
      type: 'string',
      minLength: 1,
    },
  },
}

/**
 * 校验用户数据格式
 * @param {Object} data 用户数据
 */
const registerValidator = (data = {}) => {
  return validate(SCHEMA, data)
}

module.exports = registerValidator
