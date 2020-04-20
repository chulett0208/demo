import React from 'react';
import {Link} from 'react-router-dom';

function home(){
  return(
    <div>
      <h1>Cats</h1>
      <nav>
        <b>
          <Link to="/">Home</Link> &nbsp;
          <Link to="/about">About</Link> &nbsp;
          <Link to="/types">Types</Link> &nbsp;
        </b>
      </nav>
    </div>
  );
}

export default home;