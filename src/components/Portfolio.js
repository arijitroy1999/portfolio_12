import React from 'react';
import restaurant from "../restaurant.png";
import expense from "../expense.png";
import to_do from "../to_do.jpg";
import spring from "../spring_boot.png";

const Portfolio = () => {
    return (
        <div id="projects" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Projects</h1>
                
                <div className="portfolio-image-box">
                    <a href="https://github.com/arijitroy1999/" target="_blank" rel="noreferrer">
                        <img className="portfolio-image" src={restaurant} alt="Restaurant Review Project" />
                    </a>
                    <p>Restaurant Review App</p>
                </div>               
                
                
                <div className="portfolio-image-box">
                    <a href="https://expense-tracker-12.herokuapp.com/" target="_blank" rel="noreferrer">
                        <img className="portfolio-image" src={expense} alt="Expense tracker" />
                    </a>                   
                    <p>Expense Tracker using MERN</p>
                </div>        
                
                
                <div className="portfolio-image-box">
                    <a href="https://react-todo-12.herokuapp.com/" target="_blank" rel="noreferrer">
                        <img className="portfolio-image" src={to_do} alt="React ToDo" />
                    </a>
                    <p>ToDo tracker app using REACT</p>                    
                </div>            
                
                
                <div className="portfolio-image-box">
                    <a href="https://github.com/arijitroy1999/" target="_blank" rel="noreferrer">
                        <img className="portfolio-image" src={spring} alt="Spring application" />
                    </a>                   
                    <p>A simple REST API uisng spring boot</p>
                </div>                   
                
            </div>
        </div>
    );
}
 
export default Portfolio;