import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Bangalore, Karnataka, India</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel: 555-555-555">+91 6290527295</a>
                        </div>
                        <div className="d-flex">
                            <p>arijit.roy1999@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <Link smooth={ true} to="home" className="footer-nav">Home</Link>
                                <br/>
                                <Link smooth={ true} to="about" className="footer-nav">About Me</Link>
                                <br/>
                                <Link smooth={ true} to="services" className="footer-nav">Services</Link>                           
                                                               
                            </div>
                            <div className="col">
                                
                                <Link smooth={ true} to="projects" className="footer-nav">Projects</Link>
                                <br/>
                                <Link smooth={ true} to="contact" className="footer-nav">Contact Me</Link>                              
                            </div>
                        </div>                        
                    </div>
                    <p className="pt-5 text-center">
                        Copyright&copy;
                        {new Date().getFullYear()}&nbsp;AR Designs | All rights reserved
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Footer;