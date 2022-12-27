import React from 'react'
import Sdata from "./Sdata"
import Cards from "./Cards"

const Amazon = () => {
  return (
    <>
      <Cards
        key={Sdata[1].id}
        imgsrc={Sdata[1].imgsrc}
        sname={Sdata[1].sname}
        title={Sdata[1].title}
        link={Sdata[1].link} />
    </>
  )
}

export default Amazon
