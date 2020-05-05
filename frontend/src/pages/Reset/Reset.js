import React from 'react'
import axios from '../../axios'
import './Reset.scss'

class Reset extends React.Component {
  state = {
    email: '',
    isCodeRequestSent: false,
    second: 10,
    errorMessage: {},
    verificationCode: '',
    newPassword: '',
    passwordHidden: true,
  }

  interval = null

  timer = () => {
    this.interval = setInterval(() => {
      if (this.state.second <= 0) {
        this.resetTimer()
      } else {
        this.setState({ second: this.state.second - 1 })
      }
    }, 1000)
  }

  resetTimer = () => {
    clearInterval(this.interval)
    this.interval = null
    this.setState({
      isCodeRequestSent: false,
    })
  }

  emailResetHandler = () => {
    this.setState(
      {
        isCodeRequestSent: true,
        second: 3,
        errorMessage: {},
      },
      () => {
        this.timer()
        axios
          .post('/auth/forget', { email: this.state.email })
          .then((res) => {
            alert('Verification code sent !')
          })
          .catch((res) => {
            this.setState({ errorMessage: res.errors || {} })
            this.resetTimer()
          })
      }
    )
  }

  handleReset = () => {
    this.setState({ errorMessage: {} })
    axios
      .post('auth/reset', {
        email: this.state.email,
        verificationCode: this.state.verificationCode,
        newPassword: this.state.newPassword,
      })
      .catch((res) => {
        this.setState({ errorMessage: res.errors || {} })
      })
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { errorMessage } = this.state
    return (
      <div id="reset-page">
        <div className="reset-box">
          <div className="white-box">
            <div className="form-group mt-4">
              <h3 for="email">找回密码</h3>
              <div className="form-group mt-1">
                <label for="email">邮箱</label>
                <div className="input-group">
                  <input
                    type="text"
                    id="email"
                    autoFocus="autofocus"
                    required="required"
                    placeholder="Email"
                    className="form-control"
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                  <span className="input-group-btn">
                    {this.state.isCodeRequestSent ? (
                      <button
                        type="button"
                        className="btn btn-success"
                        disabled="disabled"
                      >
                        再次发送({this.state.second} 秒)
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={this.emailResetHandler}
                      >
                        发送验证码
                      </button>
                    )}
                  </span>
                </div>
                {errorMessage.email && (
                  <div className="text-danger">{errorMessage.email}</div>
                )}
              </div>

              <div className="form-group mt-1">
                <label for="verification_code">邮件验证码</label>
                <input
                  type="text"
                  name="verification_code"
                  id="verification_code"
                  placeholder="邮件验证码"
                  className="form-control"
                  onChange={(e) => {
                    this.setState({ verificationCode: e.target.value })
                  }}
                />
                {errorMessage.verificationCode && (
                  <div className="text-danger">
                    {errorMessage.verificationCode}
                  </div>
                )}
              </div>

              <div className="form-group mt-1">
                <label for="password">密码</label>
                <div className="input-group">
                  <input
                    name="password"
                    id="password"
                    required="required"
                    type={this.state.passwordHidden ? 'password' : 'text'}
                    placeholder="新密码"
                    className="form-control"
                    onChange={(e) => {
                      this.setState({ newPassword: e.target.value })
                    }}
                  />
                  <span className="input-group-btn">
                    <button
                      type="button"
                      className="btn btn-light eye-btn"
                      onClick={() => {
                        console.log(this.state.passwordHidden)
                        this.setState({
                          passwordHidden: !this.state.passwordHidden,
                        })
                      }}
                    >
                      {this.state.passwordHidden ? (
                        <i className="fa fa-eye" />
                      ) : (
                        <i className="fa fa-eye-slash" />
                      )}
                    </button>
                  </span>
                </div>
              </div>
              <div className="form-group text-center mt-4">
                <button
                  type="submit"
                  className="btn btn-success btn-lg btn-block btn-rounded text-uppercase"
                  onClick={this.handleReset}
                >
                  重置
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Reset
