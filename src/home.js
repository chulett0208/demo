import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import ColorButton from "./ColorButton";

const colors=["red", "blue", "green"];
function Home() {
  const[colorIndex, setColorIndex]=useState(0);
  function getColor()
  {
    return colors[colorIndex % 3]
  }
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
    <ColorButton />
    </div>
  );
}

export default Home;