# Basic Project Structure
This chapter shows the basic project setup that will be used in the next chapters. 

Apart from **React** the following things are taken into consideration while setting up: 
* **ESLint**: To make the code more consistent and bugs free.
* **hapi** instead of **Express** for creating RESTful API with Node.js.
* **webpack** for building the modules
* **ejs** for loading initial HTML markup with server side data.

# Cloning and Running the Project
```
git clone https://rasharma@mcpstash.cimpress.net/scm/ibd/react_router_tutorials.git
cd react_router_tutorials
cd chapters/01_basic_project_structure
yarn 
yarn build
yarn start
```
Now open `http://localhost:3000` in the browser address bar. It will show the **Hello World!!!** in the browser. Change this value to something else in `components/app.jsx` and play with the code.

Go to the next chapter: [Rendering with Routes](/projects/IBD/repos/react_router_tutorials/browse/chapters/02_rendering_with_routes)