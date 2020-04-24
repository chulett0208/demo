import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import ColorButton from "./ColorButton";

function home() {
  return(
    <div>
      <h1>Cats</h1>
      <nav>
        <b>
          <Link to="/">Home</Link> &nbsp;
          <Link to="/about">About</Link> &nbsp;
          <Link to="/types">Types</Link> &nbsp;
        </b>
      </nav>
      <br />
    <ColorButton />
    </div>
  );
}

export default home;