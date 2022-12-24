import React from 'react'
import Cards from './Components/Cards'
import "./App.css";
import Sdata from './Components/Sdata';

// console.log(Sdata[0].sname)

const App = () => {
  return (
    <>
      <h1 className='heading-style'>List of top 5 Netflix in 2022</h1>
      <Cards imgsrc={Sdata[0].imgsrc}
        sname={Sdata[0].sname}
        link={Sdata[0].link} />

      <Cards imgsrc={Sdata[1].imgsrc}
        sname={Sdata[1].sname}
        link={Sdata[1].link} />

      <Cards imgsrc={Sdata[2].imgsrc}
        sname={Sdata[2].sname}
        link={Sdata[2].link} />

      <Cards imgsrc={Sdata[3].imgsrc}
        sname={Sdata[3].sname}
        link={Sdata[3].link} />

      <Cards imgsrc={Sdata[4].imgsrc}
        sname={Sdata[4].sname}
        link={Sdata[4].link} />

      <Cards imgsrc={Sdata[5].imgsrc}
        sname={Sdata[5].sname}
        link={Sdata[5].link} />
    </>
  )
}
export default App
