import React from 'react';
import Home from './containers/Home/home';
import Portfolio from "./containers/Portfolio/portfolio";
import About from "./containers/About/about";
import Services from "./containers/Services/services";
import Blog from "./containers/Blog/blog";
import Contact from "./containers/Contact/contact";
import { Route } from "react-router-dom";


function App() {
  return (
    <React.Fragment>
        <div className="App">
          <Route exact path = "/" component={Home} />
          <Route exact path = "/portfolio" component={Portfolio} />
          <Route exact path = "/about" component={About} />
          <Route exact path = "/services" component={Services} />
          <Route exact path = "/blog" component={Blog} />
          <Route exact path = "/contact" component={Contact} />
        </div>
    </React.Fragment>
  );
}
export default App;
