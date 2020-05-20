import React from 'react';
import '../../index.css';
function navBar() {
    /*(window).scroll(function() {
  if ((document).scrollTop() > 50) {
    ('nav').addClass('shrink');
  } else {
    ('nav').removeClass('shrink');
  }
});*/
    return(
        <div>
        <div className="menu-btn">
            <i className="fas fa-bars"></i>
        </div>
        
        <nav className="main-nav fixed-top">
            
            <div className="navbar-header">
                <img src="https://bnlconsulting.com/bnl.jpg" 
                alt="" className="inline align-middle mr-2"/>
            </div>

            <div className="main-menu">
                <ul className="navbar-nav-right">
                    <li>
                        <a href="/" className="nav-link">Home</a>
                    </li>
                    <li>
                        <a href="portfolio" className="nav-link">PORTFOLIO</a>
                    </li>
                    <li>
                        <a href="services" className="nav-link">SERVICES&nbsp; <i class="fa fa-caret-down"></i></a>
                    </li>
                    <li><a href="about" className="nav-link">ABOUT</a></li>
                    <li><a href="blog" className="nav-link">BLOG</a></li>
                    <li><a href="contact" className="nav-link">CONTACT</a></li>
                </ul>
            </div>
            
        </nav>
        </div>
    );
}
export default navBar;