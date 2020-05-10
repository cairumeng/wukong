import React, { useState, useEffect } from 'react'
import CategoryItem from '../CategoryItem/CategoryItem'
import axios from '../../axios'
const CategoryList = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    axios
      .get('/categories')
      .then((res) => {
        console.log(res)
        setCategories(res.categories)
      })
      .catch((err) => console.log(err))
  }, [])
  return (
    <>
      {categories.map((category) => (
        <CategoryItem category={category} />
      ))}
    </>
  )
}

export default CategoryList
