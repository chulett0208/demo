import React from 'react';
import {Link} from 'react-router-dom';
import ColorButton from './ColorButton';
import NavBar from './navBar';

function types() {
  return (
    <div>
    <h1>Types</h1>
      <NavBar />
      <br />
      <ColorButton />
      <br />
      <ColorButton />
    </div>
  );
}

export default types;