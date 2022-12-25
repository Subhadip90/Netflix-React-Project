import React from 'react'
import Cards from './Components/Cards'
import "./App.css";
import Sdata from './Components/Sdata';

const App = () => {
  return (
    <>
      <h1 className='heading-style'>List of top 5 Netflix in 2022</h1>
      {Sdata.map((val) => {
        return (
          <Cards
            key={val.id}
            imgsrc={val.imgsrc}
            sname={val.sname}
            link={val.link} />
        )
      })}
    </>
  )
}
export default App
