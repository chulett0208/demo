import React from 'react';
import ColorButton from './ColorButton';
import NavBar from '../navBar';

function home() {
  return(
    <div>
        <NavBar />
        <br />
        <ColorButton />
        <p>home</p>
    </div>
  );
}

export default home;