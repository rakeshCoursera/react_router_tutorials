import React from 'react';
import Nav from './nav.jsx';

const App = () => (
  <div>
    <Nav>
      <ul className="nav navbar-nav">
        <li>
          <a href="#">Home</a>
        </li>
      </ul>
    </ Nav>
    <h1 className="text-center">Hello World!!!</h1>
  </div>
);

module.exports = App;
