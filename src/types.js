import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const element = (
  <div>
    <h1>Types</h1>
    <nav>
      <b><a href = "index.js">Home</a> &nbsp; <a href = "types.js">Types</a></b>
    </nav>
  </div>
);

ReactDOM.render(element, document.getElementById('root'));
serviceWorker.unregister()