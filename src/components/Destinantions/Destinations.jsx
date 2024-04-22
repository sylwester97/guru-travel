import React from 'react'
import './Destinations.css'
import { IoLocation } from 'react-icons/io5'
import { BsCreditCard2BackFill } from 'react-icons/bs'
import { FaCalendarAlt } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
const Destinations = () => {
  return (
    <div className='destination container section'>
      <div className='secContainer'>
        <div className='a'>
          <span className='redText'>Explore Now</span>
          <h3>Find Your Dream Destination</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            alias ut ab.
          </p>
        </div>
        <div className='searchField grid'>
          <div className='inputField flex'>
            <IoLocation className='icon' />
            <input type='text ' placeholder='Location' />
          </div>
          <div className='inputField flex'>
            <BsCreditCard2BackFill className='icon' />
            <input type='text ' placeholder='Budget' />
          </div>
          <div className='inputField flex'>
            <FaCalendarAlt className='icon' />
            <input type='text ' placeholder='Date' />
          </div>
          <button className='btn searchBtn flex'>
            <FaSearch className='icon' /> Search
          </button>
        </div>
        <div className='secMenu'>
          <ul className='flex'>
            <li className='active'>All</li>
            <li>Recomended</li>
            <li>Beach</li>
            <li>Park</li>
            <li>Nature</li>
            <li>Mountains</li>
          </ul>
        </div>
        <div className='destinationContainer grid'>
          <div className='singleDesstination'>
            <div className='imgDiv'>
              <img src='' alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destinations
