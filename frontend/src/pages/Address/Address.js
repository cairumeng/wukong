import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../axios'
const Address = () => {
  const [addresses, setAddresses] = useState({})

  useEffect(() => {
    axios.get('/').then((addresses) => {
      setAddresses(addresses)
    })
  }, [])

  return (
    <div className="white-box mt-4">
      <h3>选择送达地址</h3>
      <div className="form-group mt-3">
        <Link to="/address-form">
          <button className="btn btn-success">添加新收货地址</button>
        </Link>
        <ul className="select-row-icon mt-3">
          <li className="row">
            <div className="col-md-9">
              <a>
                <div>
                  Address
                  <br />
                  Name
                  <br />
                  phone
                  <br />
                </div>
                {/* <i className="whn-hov fa fa-check-circle" /> */}
              </a>
            </div>
            <div className="col-md-3 text-right">
              <button className="btn btn-light mb-3">选择</button>
              <button className="btn btn-light mb-3">修改</button>
              <button className="btn btn-light   mb-3">删除</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Address
