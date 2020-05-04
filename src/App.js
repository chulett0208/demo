import React from 'react';
import './App.css';
import Home from "./components/home";
import About from "./components/about";
import Types from "./components/types";
import Blog from "./components/blog";
import Contact from "./components/contact";
import { Route } from "react-router-dom";
import './css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
        <div className="App">
          <Route exact path = "/" component={Home}/>
          <Route exact path = "/about" component={About}/>
          <Route exact path = "/types" component={Types}/>
          <Route exact path = "/blog" component={Blog}/>
          <Route exact path = "/contact" component={Contact}/>
        </div>
    </React.Fragment>
  );
}
export default App;
