# Server Side Rendering
To load the initial static markups faster we are using the SSR. At this stage, no event-handlers are attached with the markups. So let's get started with the SSR.

Following changes are made to enable the SSR -
* Deleted the `views` folder and its ejs (help in generating the HTML markup with plain JavaScript) file to disable Client Side Rendering (CSR).
* Remove the *ejs* and *vision* packages and related code from `main.js` which is useful for the template rendering in client side.
* For **SSR** a folder **serverside** with 2 file **server.js** and **template.js** is added.
* The `serverside/server.js` file contains the SSR logic where **ReactDOMServer** is imported. It allows to render the react component `<App>` on the server side with `<StaticRouter>` to serve the static contents without attaching any event-handlers.
* The `serverside/template.js` file provides basic HTML template almost same as deleted `views/index.ejs`, but on the server side. It receives the rendered initial static markup for the `id = app` and load on the page.
* A **babel-register** is used to compile ES6's jsx files into js using react and es2015 presets.
* `component/index.jsx` and `webpack.config.js` files can also be removed from this chapter folder because there is no use of it when doing Server Side Rendering. But we are keeping it because it will be used in next chapter.

All the things here happening on the server side, so content is already available here to be fit in the template, that's wahy it loads faster without making the too many client-server requests.

Poke around the given code for doing the SSR.

Till now we only have static markups in which defined router links are working but extra attached event-handlers are not woking. See yourself by going on path `http://localhost:3000/form` and clicking the given buttons. How to enable these button, will see in the next chapter. 

Go to the next chapter: [Isomorphic/Universal App](/projects/IBD/repos/react_router_tutorials/browse/chapters/11_isomorphic_universal_app)