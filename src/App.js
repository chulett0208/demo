import React from 'react';
//import logo from './logo.svg';
import './App.css';
import home from "./home";
import about from "./about";
import types from "./types";
import {Route, Link} from "react-router-dom";
import navBar from "./navBar";

function App() {
  return (
    <div className="App">
      <navBar />
      <Route exact path = "/" component={home}/>
      <Route exact path = "/about" component={about}/>
      <Route exact path = "/types" component={types}/>
    </div>
  );
}

export default App;
