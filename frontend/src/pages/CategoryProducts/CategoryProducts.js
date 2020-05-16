import React, { useState, useEffect } from 'react'
import CategoryItem from '../../components/CategoryItem/CategoryItem'
import axios from '../../axios'
const CategoryProducts = ({ match }) => {
  const [category, setCategory] = useState({})
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`/categories/${match.params.id}`).then((res) => {
      setCategory(res)
      setLoading(false)
    })
  }, [])

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <CategoryItem category={category} />
  )
}

export default CategoryProducts
