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
                    <ul className="nav navbar-nav navbar-right">
                        
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



/*<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
</nav>*/