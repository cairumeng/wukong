import React, { useState } from 'react'
import axios from '../../axios'
const ChangePassword = () => {
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('')
  const PasswordResetHandler = () => {
    axios
      .post('/user/changePassword', {
        password,
        newPassword,
        newPasswordConfirmation,
      })
      .then((res) => {
        console.log(res)
      })
  }
  return (
    <div id="reset-page">
      <div className="reset-box">
        <div className="white-box">
          <div className="form-group mt-4">
            <h3 for="email">修改密码</h3>
            <div className="form-group mt-1">
              <label for="password">当前密码</label>
              <div className="input-group">
                <input
                  name="password"
                  id="password"
                  required="required"
                  type="password"
                  placeholder="当前密码"
                  className="form-control"
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                />
              </div>
              <div className="form-group mt-1">
                <label for="password">新密码</label>
                <div className="input-group">
                  <input
                    name="password"
                    id="password"
                    required="required"
                    type="password"
                    placeholder="新密码"
                    className="form-control"
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="form-group mt-1">
              <label for="password">确认新密码</label>
              <div className="input-group">
                <input
                  name="password"
                  id="password"
                  required="required"
                  type="password"
                  placeholder="确认密码"
                  className="form-control"
                  onChange={(e) => setNewPasswordConfirmation(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="form-group text-center mt-4">
            <button
              type="submit"
              className="btn btn-success btn-lg btn-block btn-rounded text-uppercase"
              onClick={PasswordResetHandler}
            >
              修改密码
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword
