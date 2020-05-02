import React from 'react'
import { Link } from 'react-router-dom'
import qrCode from './bajie.jpg'
import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer mt-auto">
      <div className="footer-container">
        <div className="row">
          <div className="footer-info col-md-10">
            <div className="d-flex flex-row justify-content-around">
              <div className="p-2">
                <span>购物指南</span>
                <ul>
                  <li>
                    <Link to="#"> 注册流程</Link>
                  </li>
                  <li>
                    <Link to="#">购物流程</Link>
                  </li>
                  <li>
                    <Link to="#">交易条款</Link>
                  </li>
                  <li>
                    <Link to="#">买前须知</Link>
                  </li>
                  <li>
                    <Link to="#">常见问题</Link>
                  </li>
                </ul>
              </div>
              <div className="p-2">
                <span>配送服务</span>
                <ul>
                  <li>
                    <Link to="#"> 配送范围</Link>
                  </li>
                  <li>
                    <Link to="#">配送时间</Link>
                  </li>
                  <li>
                    <Link to="#">运费标准</Link>
                  </li>
                </ul>
              </div>
              <div className="p-2">
                <span>支付方式</span>
                <ul>
                  <li>
                    <Link to="#">货到付款</Link>
                  </li>
                </ul>
              </div>
              <div className="p-2">
                <span>联系我们</span>
                <ul>
                  <li>客服悟空：0661482473</li>
                  <li>客服邮箱：</li>
                  <li>service@wukongsongcai.fr</li>
                  <li>客服微信：</li>
                  <li>wukongsongcai_fr_bj</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-qr-code col-md-2">
            <img src={qrCode} alt="qr-code" />
          </div>
        </div>
      </div>
      <div className="footer-copyright ">
        Copyright © 2018 Wukong All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer
