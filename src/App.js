import React from 'react';
import './App.css';
import Home from "./components/home";
import About from "./components/about";
import Types from "./components/types";
import { Route } from "react-router-dom";
//import { Layout } from './components/Layout';


function App() {
  return (
    <React.Fragment>
        <div className="App">
          <Route exact path = "/" component={Home}/>
          <Route exact path = "/about" component={About}/>
          <Route exact path = "/types" component={Types}/>
        </div>
    </React.Fragment>
  );
}
export default App;
