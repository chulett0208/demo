import React from 'react';
import './css/bootstrap.min.css';

function navBar() {
    return(
        <nav style={{backgroundColor: "#292929"}}class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <img src="https://bnlconsulting.com/bnl.jpg" width="130" 
                    alt="" class="d-inline-block align-middle mr-2"/>
                </div>

                <ul class="nav navbar-nav navbar-right" text-align="inline">
                    <li class="active"><a href="/">Home</a></li>
                    <li><a href="types">Types</a></li>
                    <li><a href="about">About</a></li>
                </ul>
                </div>
        </nav>
    );
}
export default navBar;