import React from 'react';
import './App.css';
import Home from './components/Home/home';
import Portfolio from "./components/Portfolio/portfolio";
import About from "./components/About/about";
import Types from "./Not Needed/types";
import Services from "./components/Services/services";
import Blog from "./components/Blog/blog";
import Contact from "./components/Contact/contact";
import { Route } from "react-router-dom";
import './css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
        <div className="App">
          <Route exact path = "/" component={Home} />
          <Route exact path = "/portfolio" component={Portfolio} />
          <Route exact path = "/about" component={About} />
          <Route exact path = "/types" component={Types} />
          <Route exact path = "/services" component={Services} />
          <Route exact path = "/blog" component={Blog} />
          <Route exact path = "/contact" component={Contact} />
        </div>
    </React.Fragment>
  );
}
export default App;
