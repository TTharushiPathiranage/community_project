import React, { useState } from 'react'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'


const Home = () => {

  const [category] = useState("All")

  return (
    <>
      
      
      <FoodDisplay category={category}/>
      
    </>
  )
}

export default Home
