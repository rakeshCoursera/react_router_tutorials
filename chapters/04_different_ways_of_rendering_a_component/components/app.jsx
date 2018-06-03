import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Nav from './nav.jsx';
import Home from './home.jsx';
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
      <Route path="/contact/:username" render={props =>
        <ContactUser {...props} surname="Sharma" />} />
      <Route path="/contact"
        render={() => <div><h1 className="text-center">Hello, User</h1></div>} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

module.exports = App;
