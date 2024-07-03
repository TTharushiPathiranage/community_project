import React, { useState } from 'react'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'

const Home = () => {

  const [category,setCategory] = useState("All")

  return (
    <>
      
      <ExploreMenu category = {category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      
    </>
  )
}

export default Home
