# Isomorphic/Universal Application
Isomorphic JavaScript applications are applications written in JavaScript that can run both on the client and on the server i.e. the backend(Nodejs) and frontend (Reactjs) share the same code. Because of this, you can write the code once and then execute it on the server to render static pages and on the client to allow for fast interactions.

We are almost ready, we just need to add the **bundle script** tag with **bundle.js** in the `serverside/template.js`, which is built by **webpack** module bundler and render the component `<App>` on the client side using **ReactDOM** as shown in `components/index.jsx`. Then run the application by entering `localhost:3000/` in the browser. You will see the complete app with all the styles and contents. 

Notice that, we are using the same component `< App />` to the client and server to make the Isomorphic/Universal Application. 

At last a brief breakdown of things done to make the universal app -
1. The server initially renders markups with ReactDOMServer’s renderToString function.
2. At this stage, the markups don’t have any event-handlers attached.
3. Script bundle.js is loaded that tells the client to render.
4. The client renders markups with ReactDOM’s render function — all markups have event-handlers attached.
5. Client-rendered markups overwrite the div with id ‘app’.
6. When overwriting, React sees that markups are already there.
7. React preserves the markups and only attaches event-handlers, thus makes loading faster.

Go to the next chapter: [For Production Deployment](/projects/IBD/repos/react_router_tutorials/browse/chapters/12_for_production_deployment)