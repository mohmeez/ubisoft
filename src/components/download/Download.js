import React from 'react';
import "./Download.css";
import { FaApple, FaWindows } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import { IconContext } from "react-icons";

const Download = () => {
  return (
    
        <section id="download">
            <div className="container download">
              <h2>DOWNLOAD GAMES HERE</h2>
            </div>
            <IconContext.Provider value={{size: "30"}}>
            <div className="download-icons">
              <div className='download-icon'>
                <FaApple /> <p>ios</p>
              </div>
              <div className='download-icon'>
                <GrAndroid /> <p>Android</p>
              </div>
              <div className='download-icon'>
                <FaWindows /> <p>Windows</p>
              </div>

            </div>
            </IconContext.Provider>

        </section>
  );
};

export default Download