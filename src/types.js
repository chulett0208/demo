import React from 'react';
import {Link} from 'react-router-dom';

function Types() {
  return (
    <div>
    <h1>Types</h1>
    <nav>
        <b>
          <Link to="/">Home</Link> &nbsp;
          <Link to="/About">About</Link> &nbsp;
          <Link to="/Types">Types</Link> &nbsp;
        </b>
      </nav>
    </div>
  );
}

export default Types;