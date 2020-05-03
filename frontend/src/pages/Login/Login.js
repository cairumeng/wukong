import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getProfile } from '../../redux/actions/user'
import './Login.scss'
import axios from '../../axios'

const Login = ({ history, getProfile }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState({})
  const [passwordHidden, setPasswordHidden] = useState(true)
  const handleLogin = () => {
    axios
      .post('/auth/login', { email, password })
      .then((token) => {
        //write token in the axios headers so that the demande afterwards
        //systematically include the token
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        localStorage.setItem('wukong', `Bearer ${token}`)
        getProfile()
        history.push('/')
      })
      .catch((res) => {
        setErrorMessage(res.errors || {})
      })
  }

  return (
    <>
      <div id="login-page">
        <div className="login-box">
          <div className="white-box">
            <h3 className="form-title mb-0">立即登录</h3>
            <div id="login-form">
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

              <div className="form-group mt-4 d-flex flex-row-reverse">
                <Link to="/forget" className="text-dark ">
                  <i className="fa fa-lock mr-1" />
                  忘记密码?
                </Link>
              </div>

              <div className="form-group text-center mt-4">
                <button
                  type="submit"
                  className="btn btn-success btn-lg btn-block btn-rounded text-uppercase"
                  onClick={handleLogin}
                >
                  登录
                </button>
              </div>

              <div className="form-group mb-0 mt-4">
                <div className=" text-center">
                  <p>
                    还没有账号?
                    <Link to="/register" className="text-primary ml-2">
                      <b>免费注册</b>
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

const mapStateToProps = (store) => {
  return {
    profileState: store.getProfile,
  }
}

const mapDispatchToprops = (dispatch) => {
  return {
    getProfile: () => {
      dispatch(getProfile())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToprops)(Login)
