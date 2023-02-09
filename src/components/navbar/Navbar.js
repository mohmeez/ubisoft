import React, { useState } from 'react'
import "./Navbar.css"
import { SiUbisoft } from "react-icons/si"
import { AiOutlineBars } from "react-icons/ai"
import { RiCloseLine } from "react-icons/ri"

const Navbar = () => {

  const [showMenu, setShowMenu] =useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <nav className='container navbar'>
      <div className='logo'>
        <SiUbisoft color="#fff" size={33}/>
        <p className='logo-text'>
            UBISOFT
        </p>
      </div>
      <menu>
        <ul className="nav-links" id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}>
          <li> <a href="#header">Home</a> </li>
          <li> <a href="#features">Play</a> </li>
          <li> <a href="#download">Download</a> </li>
          <li> <a href="#subscribe">Subscribe</a> </li>
          <li> <a href="#contact">Contact</a> </li>
          <li className="nav-btn"> <a href="#" className='btn btn-dark'>Get Started</a> </li>
        </ul>
      </menu>
      <div className="menu-icons" onClick={toggleMenu}>
        {
          showMenu ? < RiCloseLine color='#fff' size={30}/> : <AiOutlineBars color='#fff' size={27}/>
        }
      </div>
    </nav>
  );
};

export default Navbar