import React from 'react'
import './Navbar.css'
import { TbHexagonLetterG } from 'react-icons/tb'
import Destinations from './../Destinantions/Destinations'
import { AiFillCloseCircle } from 'react-icons/ai'
import { CiMenuBurger } from 'react-icons/ci'
import { useState } from 'react'

const Navbar = () => {
  const [menuList, setMenuList] = useState('menu')
  function showNavbar() {
    setMenuList('menu showNavbar')
  }
  function hideNavbar() {
    setMenuList('menu')
  }
  return (
    <div className='navbar'>
      <div className='logo'>
        <TbHexagonLetterG />
        <span>uru-Travel</span>
      </div>
      <div className={menuList}>
        <ul>
          <li className='menu-item'>Destination</li>
          <li className='menu-item'>About Us</li>
          <li className='menu-item'>Testionial</li>
          <li className='menu-item'>Gallery</li>
        </ul>
        <AiFillCloseCircle onClick={hideNavbar} className='icon closeIcon' />
      </div>
      <button className='singUpBtn btn'>Sing Up</button>
      <CiMenuBurger onClick={showNavbar} className='icon menuIcon' />
    </div>
  )
}

export default Navbar
