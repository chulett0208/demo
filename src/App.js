import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import About from "./About";
import Types from "./Types";
import {Route, Link} from "react-router-dom";
import navBar from "./navBar";
import ColorButton from "./ColorButton";

function App() {
  return (
    <div className="App">
      <navBar />
      <Route exact path = "/" component={Home}/>
      <Route exact path = "/about" component={About}/>
      <Route exact path = "/types" component={Types}/>
    </div>
  );
}

export default App;
