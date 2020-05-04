import React from 'react';
import './App.css';
import Home from "./home";
import About from "./about";
import Types from "./types";
import { Route } from "react-router-dom";
import './css/bootstrap.min.css';


function App() {
  return (
    <React.Fragment>
        <div className="App" class="container-fluid">
          <Route exact path = "/" component={Home}/>
          <Route exact path = "/about" component={About}/>
          <Route exact path = "/types" component={Types}/>
        </div>
    </React.Fragment>
  );
}
export default App;
