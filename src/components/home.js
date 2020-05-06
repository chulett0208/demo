import React from 'react';
import NavBar from '../navBar';
import Content from './content';

function home() {
  return(
    <div>
        <NavBar />
        <br />
        <br />
        <Content />
    </div>
  );
}

export default home;