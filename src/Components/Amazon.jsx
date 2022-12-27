import React from 'react'
import Sdata from "./Sdata"
import Cards from "./Cards"

const Amazon = () => {
  return (
    <>
      <Cards
        key={Sdata[5].id}
        imgsrc={Sdata[5].imgsrc}
        sname={Sdata[5].sname}
        title={Sdata[5].title}
        link={Sdata[5].link} />
    </>
  )
}

export default Amazon
