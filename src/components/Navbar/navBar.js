import React from 'react';
import '../../index.css';
function navBar() {

    return(

        <div className="navContainer">
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                    
                <img src="https://bnlconsulting.com/bnl.jpg" 
                alt="" className="inline align-middle mr-2"/>
                    
                <button className="navbar-toggler" type="button" data-toggle="collapse" 
                data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" 
                aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="nav navbar-nav">
                        
                        <li className="nav-item">
                            <a href="/" className="nav-link">Home</a>
                        </li>
                        
                        <li className="nav-item">
                            <a href="portfolio" className="nav-link">PORTFOLIO</a>
                        </li>
                        
                        <li className="nav-item">
                            <a href="services" className="nav-link">SERVICES&nbsp; <i class="fa fa-caret-down"></i></a>
                        </li>
                        
                        <li className="nav-item">
                            <a href="about" className="nav-link">ABOUT</a>
                        </li>
                        
                        <li className="nav-item">
                            <a href="blog" className="nav-link">BLOG</a>
                        </li>
                        
                        <li className="nav-item">
                            <a href="contact" className="nav-link">CONTACT</a>
                        </li>

                    </ul>
                </div>
            
            </nav>
        </div>
    );
}
export default navBar;