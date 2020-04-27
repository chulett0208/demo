import React from 'react';
import ColorButton from "./ColorButton";
import NavBar from './navBar';

function home() {
  return(
    <div>
      <h1>Cats</h1>
        <NavBar />
        <br />
        <ColorButton />
    </div>
  );
}

export default home;