const Hapi = require('hapi');
const Good = require('good');
const Vision = require('vision');
const Inert = require('inert');
const EJS = require('ejs');
const config = require('./config/config.js');

const server = new Hapi.Server();
server.connection({ port: config.port });

server.register([Inert, Vision, {
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

  server.views({
    engines: { ejs: EJS },
    relativeTo: __dirname,
    path: 'views',
  });

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
    handler: (request, reply) => reply.view('index', { title: 'React Router Sample' }),
  },
  {
    method: 'GET',
    path: '/{path*}',
    handler: (request, reply) => reply.view('index', { title: 'React Router Sample' }),
  },
]);

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
