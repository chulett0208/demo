import React from 'react';

function navBar() {
    return(
        <nav class="navbar navbar-inverse" style={{backgroundColor: "#292929"}}>
            <div class="container-fluid">
                <div class="navbar-header">
                    <img src="https://bnlconsulting.com/bnl.jpg" width="130" 
                    alt="" class="inline align-middle mr-2"/>
                </div>

                <ul class="nav navbar-nav-right" style={{color: "#808080"}}>
                    <li>
                        <a href="/" class="nav-link" style={{color: "#808080"}}>Home</a>
                    </li>
                    <li>
                        <a href="portfolio" class="nav-link" style={{color: "#808080"}}>Portfolio</a>
                    </li>

                    <li>
                        <a  href="services" class="nav-link" style={{color: "#808080"}}>Services&nbsp;</a>

                    </li>
                    <li><a href="about" class="nav-link" style={{color: "#808080"}}>About</a></li>
                    <li><a href="blog" class="nav-link" style={{color: "#808080"}}>Blog</a></li>
                    <li><a href="contact" class="nav-link" style={{color: "#808080"}}>Contact</a></li>
                </ul>
                </div>
        </nav>
    );
}
export default navBar;