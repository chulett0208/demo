import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
//import Demo from './components/demo';
import {BrowserRouter} from 'react-router-dom';


/*function index()
{
  return
  (
    <div>
    <h1>Cats</h1>
      <nav>
        <b><Link to = {"/index"}>Home</Link> 
        &nbsp; <Link to = {"/types"}>Types</Link></b>
      </nav>
    </div>
  )
}

export default index;*/

/*var element = (
  <div>
    <h1>Cats</h1>
      <nav>
        <b><Link to = {"/index"}>Home</Link> 
        &nbsp; <Link to = {"/types"}>Types</Link></b>
      </nav>
  </div>
);*/

//var element = React.createElement('h1', { className: 'greeting' }, 'Cats');
//var element = React.createElement('ul')

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
