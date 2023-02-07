import React from 'react'
import './Header.css'
import image from "../../assets/ping.png" 



const Header = () => {
  return (
    <section id="header">
      <div className="container header">
        <div className='header-left'>
          <img src={image} alt='SALE' />
        </div>
        <div className='header-right'>
          <h1>
            <span>LUNAR NEW YEAR SALE! UP TO 80% OFF</span>
            <span>Lucky times and great savings ahead!</span>
          </h1>
        </div>
      </div>      
    </section>
  )
}


export default Header