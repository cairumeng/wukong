import React, { useState, useEffect } from 'react'
import axios from '../../axios'
import './Product.scss'

const Product = ({ match }) => {
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    axios.get(`products/${match.params.id}`).then((res) => {
      setProduct(res)
      setQuantity(res.unit)
    })
  }, [])

  return (
    <div id="product">
      <div className="container">
        <div className="row">
          <div className="col-md-4 product-image">
            <img src={product.images} alt={product.name} />
          </div>
          <div className="col-md-8 product-info">
            <h4>{product.name}</h4>
            <h4 className="mt-4">
              {product.price} 欧/{product.productUnit}
            </h4>
            <div className="quantity mt-3">
              <button
                className="btn btn-quantity btn-decrease"
                disabled={product.unit === quantity}
                onClick={() => setQuantity(quantity - product.unit)}
              >
                <span className="fa fa-minus" />
              </button>
              <span className="btn btn-outline quantity-input">{quantity}</span>
              <button
                className="btn btn-quantity btn-increase"
                onClick={() => setQuantity(quantity + product.unit)}
              >
                <span className="fa fa-plus" />
              </button>
              <span className="buy_unit ml-2">{product.productUnit}</span>
            </div>
            <div className="mt-3">库存充足</div>
            <button className="btn btn-success  mt-3">加入购物车</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
