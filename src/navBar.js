import React from 'react';

function navBar() {
    return(
        <nav class="main-nav fixed-top">
            
            <div class="navbar-header">
                <img src="https://bnlconsulting.com/bnl.jpg" 
                alt="" class="inline align-middle mr-2"/>
            </div>

            <div class="main-menu">
                <ul class="navbar-nav-right">
                    <li>
                        <a href="/" class="nav-link">Home</a>
                    </li>
                    <li>
                        <a href="portfolio" class="nav-link">PORTFOLIO</a>
                    </li>
                    <li>
                        <a href="services" class="nav-link">SERVICES&nbsp; <i class="fa fa-caret-down"></i></a>
                    </li>
                    <li><a href="about" class="nav-link">ABOUT</a></li>
                    <li><a href="blog" class="nav-link">BLOG</a></li>
                    <li><a href="contact" class="nav-link">CONTACT</a></li>
                </ul>
            </div>
        </nav>
    );
}
export default navBar;