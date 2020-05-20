import React from 'react';
import ColorButton from '../../components/ColorButton/ColorButton';
import NavBar from '../../components/Navbar/navBar';

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