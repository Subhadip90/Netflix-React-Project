import React from 'react'

function Card(props) {
  console.log(props)
  return (
    <div>
      <div className='cards'>
        <div className="card">
          <img src={props.imgsrc} alt='myPic' className='card_img' />
          <div className="card_info">
            <span className="card_category">{props.sname}</span>
            <h3 className="card_title">{props.title}</h3>
            <a href={props.link} target={'_blank'}>
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <>
      <Card imgsrc="https://occ-0-2232-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABd-iJOnLkBO7tPRFS6VNfDmHioAqvaD630vP1dKmMVTLPoz5MXFFzAxb0sqmjdUj_Q246W9vT5GIdKZym5fWiVZcFR3ldA1WfvsZiRyYSgENJ3uggxsaDGLEnJWbvhrwtXvC.jpg?r=326"
        title="A Netflix Original Series"
        sname="Money Heist"
        link="https://www.netflix.com/in/title/80192098" />
      <Card />
      <Card />

    </>
  )
}

export default App
