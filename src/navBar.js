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
                    <li class="active">
                        <a href="/" class="nav-link" style={{color: "#808080"}}>Portfolio</a>
                    </li> 
                    <li><a href="types" class="nav-link" style={{color: "#808080"}}>Services</a></li>
                    <li><a href="about" class="nav-link" style={{color: "#808080"}}>About</a></li>
                    <li><a href="blog" class="nav-link" style={{color: "#808080"}}>Blog</a></li>
                    <li><a href="contact" class="nav-link" style={{color: "#808080"}}>Contact</a></li>
                </ul>
                </div>
        </nav>
    );
}
export default navBar;