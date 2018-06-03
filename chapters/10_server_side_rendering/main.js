require('babel-register')({
  presets: ['es2015', 'react'],
});
const Hapi = require('hapi');
const Inert = require('inert');
const Boom = require('boom');
const Good = require('good');
const config = require('./config/config.js');
const RenderHTML = require('./serverside/server.js');

const server = new Hapi.Server();
server.connection({ port: config.port });

server.register([Inert, {
  register: Good,
  options: {
    reporters: {
      console: [{
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{
          response: '*',
          log: '*',
        }],
      }, {
        module: 'good-console',
      }, 'stdout'],
    },
  },
}], (err) => {
  if (err) {
    throw err;
  }

  server.route([{
    method: 'GET',
    path: '/javascripts/{path*}',
    handler: {
      directory: {
        path: 'public/javascripts',
        listing: false,
        index: false,
      },
    },
  },
  ]);
});

server.route([
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      RenderHTML(request).then((response) => {
        reply(response);
      }, (err) => {
        reply(Boom.wrap(err));
      });
    },
  },
  {
    method: 'GET',
    path: '/{path*}',
    handler: (request, reply) => {
      RenderHTML(request).then((response) => {
        reply(response);
      }, (err) => {
        reply(Boom.wrap(err));
      });
    },
  },
]);

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
