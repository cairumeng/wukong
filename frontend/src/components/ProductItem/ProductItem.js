import React from 'react'
import { Link } from 'react-router-dom'
import './ProductItem.scss'

const ProductItem = ({ product }) => {
  return (
    <div className="col-md-3 hvr-grow">
      <div id="product-item">
        <Link to={`/products/${product.id}`}>
          <div className="product-image">
            <img src={product.images[0]} />
            <button class="btn btn-success btn-circle cart-btn">
              <i aria-hidden="true" class="fa fa-shopping-cart"></i>
            </button>
          </div>
        </Link>
        <div className="product-info text-center">
          <div className="product-name nowrap ">{product.name}</div>
          <div className="product-price">
            {product.price}欧/{product.productUnit}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
