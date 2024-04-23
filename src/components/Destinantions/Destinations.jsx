import React from 'react'
import './Destinations.css'
import { IoLocation } from 'react-icons/io5'
import { BsCreditCard2BackFill } from 'react-icons/bs'
import { FaCalendarAlt } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.jpg'
import image5 from '../../assets/image5.jpg'
import image6 from '../../assets/image6.jpg'
import image7 from '../../assets/image7.jpg'
import image8 from '../../assets/image8.jpg'

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      img: image1,
      name: 'Brown Mountain',
      location: 'New Zealand',
      rating: 4.6,
    },
    {
      id: 2,
      img: image2,
      name: 'Blue Lake',
      location: 'Canada',
      rating: 4.8,
    },
    {
      id: 3,
      img: image3,
      name: 'Golden Beach',
      location: 'Australia',
      rating: 4.5,
    },
    {
      id: 4,
      img: image4,
      name: 'Silver Falls',
      location: 'USA',
      rating: 4.7,
    },
    {
      id: 5,
      img: image5,
      name: 'Emerald Valley',
      location: 'Ireland',
      rating: 4.9,
    },
    {
      id: 6,
      img: image6,
      name: 'Red Canyon',
      location: 'Jordan',
      rating: 4.4,
    },
    {
      id: 7,
      img: image7,
      name: 'Crystal Cove',
      location: 'Philippines',
      rating: 4.7,
    },
    {
      id: 8,
      img: image8,
      name: 'Misty Peak',
      location: 'Nepal',
      rating: 4.6,
    },
  ]

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
            <input type='text' placeholder='Location' />
          </div>
          <div className='inputField flex'>
            <BsCreditCard2BackFill className='icon' />
            <input type='text' placeholder='Budget' />
          </div>
          <div className='inputField flex'>
            <FaCalendarAlt className='icon' />
            <input type='text' placeholder='Date' />
          </div>
          <button className='btn searchBtn flex'>
            <FaSearch className='icon' /> Search
          </button>
        </div>
        <div className='secMenu'>
          <ul className='flex'>
            <li className='active'>All</li>
            <li>Recommended</li>
            <li>Beach</li>
            <li>Park</li>
            <li>Nature</li>
            <li>Mountains</li>
          </ul>
        </div>
        <div className='destinationContainer grid'>
          {destinations.map((destination) => {
            return (
              <div className='singleDestination' key={destination.id}>
                <div className='imgDiv'>
                  <img src={destination.img} alt={destination.name} />
                  <div className='destiInfo flex'>
                    <div className='destiText'>
                      <span className='destiName'>{destination.name}</span>
                      <p className='flex destiIcon'>
                        <IoLocation className='iconL' />
                        {destination.location}
                      </p>
                    </div>
                    <span className='rating'>{destination.rating}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Destinations
