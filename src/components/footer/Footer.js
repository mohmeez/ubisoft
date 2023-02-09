import React from 'react';
import "./Footer.css";
import logo from "../../assets/logo.png";
import { SiUbisoft } from "react-icons/si"

const Footer = () => {
  return (
    <section id='footer'>
        <div className="container footer">
        <div className="footer-box">
          <h4>About Us</h4>
          <div className="footer-links">
            <a href="#">&bull; Our Story</a>
            <a href="#">&bull; Our Brands</a>
            <a href="#">&bull; Diversity & Inclusion</a>
            <a href="#">&bull; Investor Center</a>
            <a href="#">&bull; Ubisoft Codes of Conduct</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Careers</h4>
          <div className="footer-links">
            <a href="#">&bull; Working At Ubisoft</a>
            <a href="#">&bull; Our Jobs</a>
            <a href="#">&bull; Interns & Graduates</a>
            <a href="#">&bull; Locations</a>
          </div>
        </div>

        <div className="footer-box">
          <h4>Support</h4>
          <div className="footer-links">
            <a href="#">&bull; Purchase & Rewards</a>
            <a href="#">&bull; Connectivity & Performance</a>
            <a href="#">&bull; Player Safety & Trust</a>
            <a href="#">&bull; Account</a>
          </div>
        </div>
        {/* <div className="footer-box">
          <img src={logo} alt="logo" />
        </div> */}
        <div className='footer-box'>
        <SiUbisoft color="black" size={35}/>
           <h4>UBISOFT</h4>
           <p className="u-text-small">&copy; Copyright 2023. Ubisoft.com</p>
           
        </div>
      

      </div>
    </section>
  )
}

export default Footer