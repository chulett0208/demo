import React from 'react';
import NavBar from '../../components/Navbar/navBar';
import Content from '../Content/content';

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