import React from 'react';

function navBar2() {
    return(
        <div>
<nav class="navbar navbar-expand-md navbar-right navbar-dark">
  <a class="navbar-brand" href="#"><img src="https://bnlconsulting.com/bnl.jpg" width="130"/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    );
}
export default navBar2;



import React from 'react';

function navBar() {
    return(
        <div class="container">
        <nav class="navbar navbar-custom fixed-top" style={{backgroundColor: "#292929"}}>
            
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
                        <a href="services" class="nav-link" style={{color: "#808080"}}>Services&nbsp; <i class="fa fa-caret-down"></i></a>
                    </li>
                    <li><a href="about" class="nav-link" style={{color: "#808080"}}>About</a></li>
                    <li><a href="blog" class="nav-link" style={{color: "#808080"}}>Blog</a></li>
                    <li><a href="contact" class="nav-link" style={{color: "#808080"}}>Contact</a></li>
                </ul>
            </div>
        </nav>
        </div>
    );
}
export default navBar;