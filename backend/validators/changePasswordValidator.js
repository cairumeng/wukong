const validate = require('./validate')

// 校验规则
const SCHEMA = {
  type: 'object',
  required: ['password', 'newPassword', 'newPasswordConfirmation'],
  properties: {
    password: {
      type: 'string',
      maxLength: 255,
      minLength: 6,
    },
    newPassword: {
      type: 'string',
      maxLength: 255,
      minLength: 6,
    },
    newPasswordConfirmation: {
      type: 'string',
      const: {
        $data: '1/newPassword',
      },
    },
  },
}

/**
 * 校验用户数据格式
 * @param {Object} data 用户数据
 */
const changePasswordValidator = (data = {}) => {
  return validate(SCHEMA, data)
}

module.exports = changePasswordValidator
