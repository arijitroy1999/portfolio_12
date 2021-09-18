import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <h1>Full Stack Web Development</h1>
                <Typed
                    className="typed-text"
                    strings={["Web Design", "Web Development", "Mongo DB", "Backend"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />                
                <Link smooth={true} to="contact" className="btn-main-offer" href="#">
                    Contact Me
                </Link>
            </div>
       </div>

     );
}
 
export default Header;