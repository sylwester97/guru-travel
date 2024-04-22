import React from 'react'
import './Home.css'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import bcg from './../../assets/bcg.mp4'
const Home = () => {
  return (
    <div className='home'>
      <div className='video-bcg'>
        <video src={bcg} autoPlay loop muted></video>
      </div>
      <div className='sectionText'>
        <h1>Unlock your travel dreams with Us!</h1>
        <p>Discover the world's most adventurous nature</p>
        <button className='btn'>
          Get started
          <MdOutlineKeyboardDoubleArrowRight className='icon' />
        </button>
      </div>
      <div className='popularPlaces'>
        <div className='content'>
          <h3>Popular Places</h3>
          <div className='images flex'></div>
        </div>
      </div>
    </div>
  )
}

export default Home
