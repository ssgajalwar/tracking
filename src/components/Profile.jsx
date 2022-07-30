import React from 'react'
import Profileimg from './images/image-jeremy.png'
import './Profile.css';


const Profile = () => {
  return (
    <div className='profile'>
       <img className='img' src={Profileimg} alt="" />
       <p>
        Report For
       </p>
       <h1>
        JEREMY
        ROBSON
       </h1>
    </div>
  )
}

export default Profile