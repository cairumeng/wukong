import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import RegisterModal from '../../components/Modal/RegisterModal'
import ReCAPTCHA from 'react-google-recaptcha'
import './Register.scss'
import axios from '../../axios'

const Register = ({ history }) => {
  const [showModal, setShowModal] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [recaptcha, setRecaptcha] = useState('')
  const [errorMessage, setErrorMessage] = useState({})
  const [passwordHidden, setPasswordHidden] = useState(true)

  const handleRegister = () => {
    axios
      .post('/auth/register', { email, password, recaptcha })
      .then((res) => {
        history.push('/login')
      })
      .catch((res) => {
        setErrorMessage(res.errors || {})
      })
  }

  return (
    <>
      <RegisterModal show={showModal} handleClose={() => setShowModal(false)} />
      <div id="register-page">
        <div className="register-box">
          <div className="white-box">
            <h3 className="form-title mb-0">免费注册</h3>
            <div id="register-form">
              <div className="form-group mt-4">
                <label for="email">邮箱</label>
                <input
                  required="required"
                  autofocus="autofocus"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="邮箱"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errorMessage.email && (
                  <div className="text-danger">{errorMessage.email}</div>
                )}
              </div>
              <div className="form-group mt-1 ">
                <label for="password">密码</label>
                <div className="input-group">
                  <input
                    name="password"
                    id="password"
                    required="required"
                    type={passwordHidden ? 'password' : 'text'}
                    placeholder="密码"
                    className="form-control"
                    autocomplete="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span className="input-group-btn">
                    <button
                      type="button"
                      className="btn btn-light eye-btn"
                      onClick={() => setPasswordHidden(!passwordHidden)}
                    >
                      {passwordHidden ? (
                        <i className="fa fa-eye" />
                      ) : (
                        <i className="fa fa-eye-slash" />
                      )}
                    </button>
                  </span>
                </div>
                {errorMessage.password && (
                  <div className="text-danger">{errorMessage.password}</div>
                )}
              </div>
              <div className="form-group mt-1">
                <label>邀请码(可选)</label>
                <input
                  autofocus="autofocus"
                  type="text"
                  name="introducer_code"
                  id="introducer_code"
                  placeholder="可向朋友询问Ta的邀请码"
                  className="form-control"
                  autocomplete="off"
                />
                <div className="text-danger"></div>
              </div>
              <div className="form-group mt-1">
                <ReCAPTCHA
                  sitekey="6LdhxPQUAAAAAGmoc7_Vat0Atjuml_az33ZlMRlA"
                  onChange={(token) => setRecaptcha(token)}
                />
                {errorMessage.recaptcha && (
                  <div className="text-danger">{errorMessage.recaptcha}</div>
                )}
              </div>
              <div className="form-group mt-1">
                <span className="text-muted">已阅读并同意以下协议</span>
                <a
                  href="#"
                  className="text-primary"
                  onClick={() => setShowModal(true)}
                >
                  《悟空服务协议》
                </a>
              </div>
              <div className="form-group text-center mt-4">
                <button
                  type="submit"
                  className="btn btn-success btn-lg btn-block btn-rounded text-uppercase"
                  onClick={handleRegister}
                >
                  注册
                </button>
              </div>

              <div className="form-group mb-0 mt-4">
                <div className=" text-center">
                  <p>
                    已经有账号了?
                    <Link to="/login" className="text-primary ml-2">
                      <b>立即登录</b>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
