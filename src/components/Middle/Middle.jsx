import React from 'react'
import './Middle.css'
import Destinations from './../Destinantions/Destinations'

const Middle = () => {
  return (
    <div className='middle section'>
      <div className='secContainer'>
        <div className='grid rating-info'>
          <span className='flex'>
            <h1>10K+</h1>
            <p>World of eexperiiences</p>
          </span>
          <span className='flex'>
            <h1>2K+</h1>
            <p>Fine Destinations</p>
          </span>
          <span className='flex'>
            <h1>10</h1>
            <p>Customers Revievs</p>
          </span>
          <span className='flex'>
            <h1>4.8</h1>
            <p>Overall Ratings</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Middle
