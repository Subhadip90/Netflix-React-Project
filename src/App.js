import React from 'react'
import Cards from './Components/Cards'
import "./App.css";
import Sdata from './Components/Sdata';
import Netflix from './Components/Netflix';
import Amazon from './Components/Amazon';

const favSeries = "Netflix"
const FavS = () => {
  if (favSeries === "Netflix") {
    return <Netflix />
  }
  else {
    return <Amazon />
  }
}

const App = () => {
  return (
    <>
      <h1 className='heading-style'>List of top 5 Netflix in 2022</h1>
      <FavS />
    </>
  )
}
export default App
