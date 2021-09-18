import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNode } from '@fortawesome/free-brands-svg-icons';
import { faDesktop,faDatabase} from '@fortawesome/free-solid-svg-icons';


const Services = () => {
    return (
        <div id="services" className="services">
            <h1 className="py-5">My Services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon icon={ faDesktop} size="2x"/>
                                </div>
                                <h3>Web Design</h3>
                                <p>I approach projects individually and focus on the result</p>
                            </div>
                        </div>
                        { /* - */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon icon={ faReact} size="3x"/>
                                </div>
                                <h3>Web Development</h3>
                                <p>Your website will be built with proven technologies such as React JS</p>
                            </div>
                        </div>
                        { /* - */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon icon={ faDatabase} size="2x"/>
                                </div>
                                <h3>DataBase</h3>
                                <p>Provides database connectivity with Mongo DB or PostGres</p>
                            </div>
                        </div>
                        { /* - */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon icon={faNode } size="2x"/>
                                </div>
                                <h3>Backend</h3>
                                <p>The backend is done using Node JS/Spring Boot</p>
                            </div>
                        </div>
                    </div>
                </div>

            

        </div>
     );
}
 
export default Services;