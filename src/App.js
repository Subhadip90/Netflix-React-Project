import React from 'react'
import "./App.css";
import Netflix from './Components/Netflix';
import Amazon from './Components/Amazon';

const favSeries = "Amazon"
const FavS = () => {
  if (favSeries === "Amazon") {
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
