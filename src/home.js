import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
//import ColorButton from './ColorButton';



function color(){
  var div = document.getElementById("blueText");
  return(
  div.setAttribute("onclick", "blueText")
  );
}

function Home() {
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
      <button onclick = "blueText">Change</button>
    </div>
  );
}

export default Home;