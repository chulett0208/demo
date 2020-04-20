import React from 'react';
import {Link} from 'react-router-dom';

function about()
{
  return (
      <div>
        <h1>About</h1>
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

export default about;