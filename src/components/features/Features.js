import React from 'react'
import { BiJoystick } from "react-icons/bi";
import './Features.css'
import creed from "../../assets/creed.png" 
import farcry from "../../assets/farcry.png"


const Features = () => {
  return (
    <section id="features">
      <div className='container features'>
        <div className='u-title'>
          < BiJoystick color="orangered" size={60}/>
          <h2>PLAY</h2>
          <h3>UBISOFT FREE EVENTS</h3>
          <p>These free games are aimed for players from the age of 7 and upwards.</p>
        </div> 

        <div className="features-content">

          <div className="feature-left">
            <a href='https://www.ubisoft.com/en-ca/game/assassins-creed' target="_blank">
            <img src={ creed } alt="Play Assasin's Creed" />
            </a>
          </div>

          <div className='feature-right'>
            <a href="https://www.ubisoft.com/en-ca/game/far-cry/far-cry-6" target="_blank">
            <img src = { farcry } alt="Play Farcry" />
            </a>
          </div>

        </div>
      </div>
    </section>
        
    
  );
};

export default Features

