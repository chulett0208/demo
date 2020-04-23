import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import ColorButton from "./ColorButton";

const colors=["red", "blue", "green"];
function Home() {
  const[colorIndex, setColorIndex]=useState(colors[0]);
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
      <p>Change Color</p>
  <button onClick={()=>setColorIndex(colorIndex + 1)}>Change</button>
    </div>
  );
}

export default Home;