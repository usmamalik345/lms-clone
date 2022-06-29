import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";


import "./footer.css"
const footer = () => {
  return (
    <div className="Container-fluid">
    <div  className="container d-md-flex d-sm-flex flex-md-row flex-sm-column justify-content-md-between  align-items-sm-center footer">
      <div  className="d-flex justify-content-center align-items-center  order-sm-0 order-md-1">
        <ul>
        <li><a href="#"><FontAwesomeIcon icon={faFacebook} className="greycolor"></FontAwesomeIcon></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faInstagram} className="greycolor"></FontAwesomeIcon></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faTwitter}  className="greycolor"></FontAwesomeIcon></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} className="greycolor"></FontAwesomeIcon></a></li>
        </ul>
      </div>
      <div  className="d-flex justify-content-center  align-items-center order-sm-1 order-md-0">
      <p>&copy; 2022 DevNation PTE Ltd.. All rights reserved.</p>
    </div>
    </div>
    </div>
  )
}

export default footer