import React from 'react';
import { Route } from 'react-router-dom';

import Nav from './nav.jsx';
import Home from './home.jsx';
import Contact from './contact.jsx';
import NotFound from './notFound.jsx';

const App = () => (
  <div>
    <Nav>
      <ul className="nav navbar-nav">
        <li>
          <a href="#">Home</a>
        </li>
      </ul>
    </ Nav>
    <Route path="/" component={Home} />
    <Route path="/contact" component={Contact} />
    <Route component={NotFound} />
  </div>
);

module.exports = App;
