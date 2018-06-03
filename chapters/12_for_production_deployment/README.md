# For Production Deployment
Using **babel-register** in `main.js` compiles files at runtime, and it will always make the app slower and memory-consuming. So it is recommended to compile to a separate file for production before running the server.

For making is production ready code we have made another webpack bundler file `webpack.server.config.js` to bundle all the server related modules in a file called `server.bundle.js`. 

And finally adding a npm script to run the webpack for client and server will start the application.