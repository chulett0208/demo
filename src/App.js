import React from 'react';
import './App.css';
import Home from "./Home";
import About from "./About";
import Types from "./Types";
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
