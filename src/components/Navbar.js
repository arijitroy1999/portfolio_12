import React from 'react';
import logo from "../logo1.png";
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div  className="container">
          <a className="navbar-brand" href="#"><img className ="logo" src={logo} alt="logo"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{color:"black"}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
          <Link smooth={ true} to="home" className="nav-link" href="#">Home</Link>
      </li>
      <li className="nav-item">
        <Link smooth={ true} to="about" className="nav-link" href="#">About Me</Link>
      </li>
      <li className="nav-item">
        <Link smooth={ true} to="services" className="nav-link" href="#">Services</Link>
      </li>
      
      <li className="nav-item">
        <Link smooth={ true} to="projects" className="nav-link" href="#">Projects</Link>
      </li>
      <li className="nav-item">
        <Link smooth={ true} to="contact" className="nav-link" href="#">Contact Me</Link>
      </li>        
      
    </ul>
    
  </div>


  </div>
      
  </nav>
     );
}
 
export default Navbar;