import React from 'react';
import './App.css';
import Home from "./home";
import About from "./about";
import Types from "./types";
import NavBar from "./navBar";
import {Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path = "/" component={Home}/>
      <Route exact path = "/about" component={About}/>
      <Route exact path = "/types" component={Types}/>
    </div>
  );
}

export default App;
