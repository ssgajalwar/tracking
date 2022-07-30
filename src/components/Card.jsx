import React from 'react'
import './Card.css';


const Card = (props) => {
  return (
    <div className='bg'>
      <div className="main">
        <div className='card-row'>
          <p className='title'>{props.title}</p>
          <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd" /></svg>
        </div>
        <h1 className='time'>{props.time}</h1>
        <p className="last-week">Last Week-{props.week}</p>
      </div>
    </div>
  )
}

export default Card