import React from 'react'
import { Link } from 'react-router-dom'
import ProductList from '../ProductList/ProductList'
const CategoryItem = ({ category }) => {
  return (
    <>
      <Link to={`categories/${category.id}`}>
        <div className="mt-5">
          <h3>{category.name}</h3>
          <img className="d-block w-100 " src={category.image} />
        </div>
      </Link>
      <ProductList products={category.products} />
    </>
  )
}

export default CategoryItem
