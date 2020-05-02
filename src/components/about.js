import React from 'react';
import ColorButton from './ColorButton';
import NavBar from './navBar';

function about() {
  return (
      <div>
        <h1>About</h1>
          <NavBar />
          <br />
          <ColorButton />
      </div>
  );
}

export default about;