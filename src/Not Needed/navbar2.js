import React from 'react';
import './index.css';

function navbar2() {

    (window).scroll(function() {
  if ((document).scrollTop() > 50) {
    ('nav').addClass('shrink');
  } else {
    ('nav').removeClass('shrink');
  }
});
return(

<nav className="navbar navbar-inverse navbar-fixed-top">
  <div className="container">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">Brand</a>
    </div>
    <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav pull-right">
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
        </ul>
    </div>
  </div>
</nav>

);
}
export default navbar2;