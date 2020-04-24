import React from 'react';
import {Link} from 'react-router-dom';
import ColorButton from './ColorButton';

function types() {
  return (
    <div>
    <h1>Types</h1>
    <nav>
        <b>
          <Link to="/">Home</Link> &nbsp;
          <Link to="/about">About</Link> &nbsp;
          <Link to="/types">Types</Link> &nbsp;
        </b>
      </nav>
      <br />
      <ColorButton />
      <br />
      <ColorButton />
    </div>
  );
}

export default types;