import React from 'react';
import ColorButton from '../ColorButton/ColorButton';
import NavBar from '../../navBar';

function about() {
  return (
      <div>
          <NavBar />
          <br />
          <ColorButton />
          <br />
          <p>About</p>
      </div>
  );
}

export default about;