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

<nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Brand</a>
    </div>
    <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav pull-right">
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
        </ul>
    </div>
  </div>
</nav>

);
}
export default navbar2;