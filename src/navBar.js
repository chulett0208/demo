import React from 'react';
import {Link} from 'react-router-dom';
import './css/bootstrap.min.css';

function navBar() {
    return(
        <div>
            <nav style ={{backgroundColor: "#292929"}}>
                <b>
                    <Link to="/">Home</Link> &nbsp;
                    <Link to="/about">About</Link> &nbsp;
                    <Link to="/types">Types</Link> &nbsp;
                </b>
            </nav>

        </div>
    );
}
export default navBar;