import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { logout } from '../../redux/actions/auth'
import { getProfile } from '../../redux/actions/user'
import icon from './icon.png'
import './Header.scss'
import { LinkContainer } from 'react-router-bootstrap'

const Header = (props) => {
  const { t, i18n } = useTranslation()

  const isAuth = props.profileState && props.profileState.isAuth
  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value)
  }

  const profile = isAuth ? (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {props.profileState.user.email}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">
          <>
            <a aria-hidden="true" class="fa fa-user-o"></a>
            全部订单
          </>
        </Dropdown.Item>
        <LinkContainer to="/change-password">
          <Dropdown.Item>个人资料</Dropdown.Item>
        </LinkContainer>
        <LinkContainer to="/address">
          <Dropdown.Item>管理地址</Dropdown.Item>
        </LinkContainer>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item on-click" onClick={logout}>
          退出登录
        </a>
      </Dropdown.Menu>
    </Dropdown>
  ) : (
    <>
      <li>
        <NavLink to="/login" className="">
          {t('actions.login')}
        </NavLink>
      </li>
      <li>
        <NavLink to="/register" className="">
          {t('actions.register')}
        </NavLink>
      </li>
    </>
  )

  return (
    <div className="navbars" id="navbar">
      <nav className="navbar navbar-delivery-info bg-success">
        <div className="container m-t-5">
          <span className="hidden-xs text-white head-text">
            {t('deliveryInfo')}
          </span>
          <div className="pull-right language-select">
            <span className="text-white">Language:</span>{' '}
            <select className="lang-select inline" onChange={changeLanguage}>
              <option value="zh">中文</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-default navbar-search">
        <div className="container m-t-0">
          <ul className="nav navbar-top-links navbar-left">
            <li>
              <NavLink
                to="/"
                className="router-link-exact-active router-link-active"
              >
                <img alt="logo" className="navbar-logo" src={icon} />
                <span className="text-dark">{t('logo_name')}</span>
              </NavLink>
            </li>
          </ul>
          <ul className="nav navbar-top-links navbar-right pull-right">
            <li>
              <div>
                <div role="search" className="app-search m-r-10">
                  <input
                    type="text"
                    placeholder="请输入您要搜索的产品"
                    className="form-control"
                  />
                  <a href="" className="active">
                    <i className="fa fa-search" />
                  </a>
                </div>
              </div>
            </li>

            {profile}

            <li id="shopping-cart" className="shopping-cart">
              <NavLink to="/cart" className="">
                <i className="fa fa-shopping-cart fa-fw" />
                <span>购物车</span>
                <span>0 €</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="navbar navbar-default navbar-catalogs m-b-0">
        <div className="container">
          <div className="navbar-header">
            <ul className="nav navbar-top-links navbar-left">
              <li className="dropdown catalogs-container">
                <a
                  href="#"
                  data-toggle="dropdown"
                  className="dropdown-toggle bg-success text-white"
                >
                  <span>全部商品分类</span>
                </a>
                <ul className="dropdown-menu dropdown-catalogs always-open">
                  <li>
                    <Link to="/products">
                      <img
                        src="https://dy8moltrwasx7.cloudfront.net/placeholder/placeholder_empty.jpg"
                        alt=""
                        className="catalog-icon"
                      />
                      随便逛逛
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/">
                  <span>首页</span>
                </Link>
              </li>
              <li>
                <a href="/">
                  <span>新品专区</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>热销推荐</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>每日生鲜</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span> 优惠专区</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

const mapStateToProps = (store) => {
  return {
    profileState: store.getProfile,
  }
}

const mapDispatchToprops = (dispatch) => {
  return {
    getProfile: () => dispatch(getProfile()),
  }
}

export default connect(mapStateToProps, mapDispatchToprops)(Header)
