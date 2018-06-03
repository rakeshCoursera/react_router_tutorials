# Nested Routes with Active Links
For creating the nested routes (routes which placed inside a route) in *React Router 4*, routes are placed inside a component which is rendered by a route. Following things are done to create nested routes -

Take a look at `components/app.jsx` and `components/topics.jsx`.

* In `components/app.jsx` added a routes with path **"/topics"** and component **Topics**.
* In `components/topics.jsx`, in **Topics** component, nested routes are created using a route with a param and corresponding 2-3 link for navigation. By clicking on these navigation link render **Topic** component content. Also, try with some other parameter of your choice, for example: `http://localhost:3000/topics/yourchoice` and this will show the entered parameter value in the **Topic** component content. 

Go to the next chapter: [Server Side Rendering](/projects/IBD/repos/react_router_tutorials/browse/chapters/10_server_side_rendering)