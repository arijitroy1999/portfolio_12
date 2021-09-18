import React from 'react';
import author from "../me.jpg";
const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={ author} alt="About me"/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Me</h1>
                    <p className="about-text">
                        Seeking a beginner's role to explore and enhance my Technical knowledge gained at my University over the last three years.Currently I'm in the 6th semester of my B.E. course which I'm pursuing from Dayanand Sagar Instituions, Bangalore. Apart from being an aspiring full stack developer, I'm an avid problem solver and quick learner. Also I've been a part of numerous presentation and hackathons throuhout my career.
                    </p>
                </div>
            </div>

        </div>
     );
}
 
export default AboutMe;