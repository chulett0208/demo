import React from 'react';
import ColorButton from './ColorButton';
import NavBar from '../navBar';

function about() {
  return (
      <div>
          <NavBar />
          <br />
          <ColorButton />
          <p>About</p>
      </div>
  );
}

export default about;