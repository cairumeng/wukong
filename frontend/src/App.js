import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Reset from './pages/Reset/Reset'
import Product from './pages/Product/Product'
import CategoryProducts from './pages/CategoryProducts/CategoryProducts'
import PasswordReset from './pages/ChangePassword/ChangePassword'
import Address from './pages/Address/Address'
import AddressForm from './pages/AddressForm/AddressForm'

import { logout } from './redux/actions/auth'
import axios from './axios'
import './App.css'
import { getProfile } from './redux/actions/user'
import { connect } from 'react-redux'

const App = (props) => {
  //刷新页面后,axios的token就没有了需要重新加上
  const token = localStorage.getItem('wukong')
  if (token) {
    axios.defaults.headers.common.Authorization = token
    props.getProfile().catch(() => {
      logout()
    })
  }

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/forget" exact component={Reset} />
          <Route path="/products/:id" exact component={Product} />
          <Route path="/categories/:id" exact component={CategoryProducts} />
          <Route path="/change-password" exact component={PasswordReset} />
          <Route path="/address" exact component={Address} />
          <Route path="/address-form" exact component={AddressForm} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

const mapStateToProps = (store) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProfile: () => dispatch(getProfile()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
