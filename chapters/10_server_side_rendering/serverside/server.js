const React = require('react');
const StaticRouter = require('react-router').StaticRouter;
const ReactDOMServer = require('react-dom/server');
const Promise = require('bluebird');
const template = require('./template.js');
const App = require('../components/app.jsx');

const RenderHTML = req => new Promise((resolve) => {
  const context = {};
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>);
  resolve(template({ title: 'React Router Sample', body: html }));
});

module.exports = RenderHTML;
