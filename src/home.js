import React from 'react';
import {Link} from 'react-router-dom';
//import ColorButton from './ColorButton';

function color(){
  return(
      document.getElementById('change').style.color = "blue"
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

      <p id='change'>Change Color</p>
      <button onClick="color()">Change</button>
    </div>
  );
}

export default Home;