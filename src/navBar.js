import React from 'react';
import {Link} from 'react-router-dom';

function navBar()
{
    return(
        <div>
        <ul>
            <b>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/types">Types</Link></li>
            </b>
        </ul>
        </div>
    );
}
export default navBar;