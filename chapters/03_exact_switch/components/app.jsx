import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Nav from './nav.jsx';
import Home from './home.jsx';
import Contact from './contact.jsx';
import ContactUser from './contactUser.jsx';
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
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/contact/:username" component={ContactUser} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

module.exports = App;
