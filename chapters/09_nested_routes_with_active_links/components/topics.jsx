import React from 'react';
import { Route, NavLink } from 'react-router-dom';

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>T
    <ul>
      <li><NavLink to={`${match.url}/rendering`} activeStyle={{ color: 'red' }}>Rendering with React</NavLink></li>
      <li><NavLink to={`${match.url}/components`} activeStyle={{ color: 'red' }}>Components</NavLink></li>
      <li><NavLink to={`${match.url}/props-v-state`} activeStyle={{ color: 'red' }}>Props v. State</NavLink></li>
    </ul>
    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )} />
  </div>
);

module.exports = Topics;
