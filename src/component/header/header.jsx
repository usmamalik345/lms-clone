import React,{useState} from 'react';
import Image from 'react-bootstrap/Image';
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"; 



function Header(){
  const [isActive, setIsActive] = useState(false);
  const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
    console.log(isActive)
  };
  return(
    <div className="container-fluid header ">
    <div  className="container header nopadding">
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
  <div className="container-fluid my-1 nopadding ">
  <a href="#home"><Image src="/images/logo.png" className="logo"/></a>

    <button className="navbar-toggler menuButton" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation"  onClick={handleClick}>
      <span>
      <img className={isActive ? 'd-none' : ''} src="/images/menu-icon.svg" alt=""/>
      <img className={isActive ? '' : 'd-none'} src="/images/menu-icon-close.svg" alt=""/>
      </span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item spacing">
        <a href="#home" className="myButton">Home</a>
        </li>
        <li className="nav-item spacing">
        <a href="#my-applications" className="myButton">My Applications</a>
        </li>
        <li className="nav-item spacing">
        <a href="#my-resume" className="myButton">My Resume</a>
        </li>
      </ul>
      
      <div className={isActive ? 'd-none' : 'dropdown'}>
  <button  className="logoButton" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <a href="#home"><img src="/images/profile.avif" className="logo"/></a>

  </button>
  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
    <li><Link to="/profile" className="dropdown-item" href="#">Your Profile</Link></li>
    <li><a className="dropdown-item" href="#">Sign out</a></li>
  </ul>
</div>
<div className={isActive ? 'collapsedProfileSection d-flex  justify-content-between ' : 'd-none'}>
  <div className="profileDetails">
  <img src="/images/profile.avif" className="logo" alt=""/>
  <p className="email">aman.mohsin@devnation.com</p> 
  </div>
  <div><a href="#" className="myBellIcon"><FontAwesomeIcon icon={faBell} /></a></div>
 
</div>
<div className={isActive ? 'collapsedProfileSectionButtons d-flex ' : 'd-none d-md-none'}>
<a className="myButton" href="#">Your Profile</a>
    <a className="myButton" href="#">Sign out</a>

</div>
    </div>
  </div>
</nav>
</div>
<div className="container courseHeading my-2 nopadding">
<h2 className="text-light">
8 Week flutter Program with Usama Sarwar
          </h2>
          </div>

</div>

  )
}
export default Header