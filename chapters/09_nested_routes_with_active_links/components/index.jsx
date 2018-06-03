import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

import App from './app.jsx';

ReactDOM.render((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), document.getElementById('app'));