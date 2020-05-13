import React from 'react'
import ProductItem from '../ProductItem/ProductItem'
const ProductList = ({ products }) => {
  return (
    <div className="row mt-3">
      {products.data.map((product) => (
        <ProductItem product={product} />
      ))}
    </div>
  )
}

export default ProductList
