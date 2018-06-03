# Rendering with Routes
This chapter explains to create basic routes using react router 4. 

After completing *chapter 1* code, the things which are done here listed as:
* Created 3 more components `home.jsx`, `contact.jsx` and `notFound.jsx` in components folder.
* Installed **react-router-dom** using yarn or npm. 
* Imported the **Route** in `components/app.jsx` and **BrowserRouter** in `components/index.jsx` from installed *react-router-dom* package.
* Added the routes **"/"**, **"/contact"** and route for **Not Found** in `components/app.jsx` with their components. This the way to create the route in react router as you see in code.
* In `components/index.jsx`, enclosed the react component **App** within **BrowserRouter**. This will render our App to the client side.
* In `main.js`, created a another server route **/{path\*}** with the same `views/index.ejs` template. This will help to show the same content on the server route other than this route **"/"**, if somebody lands on the server route other than **"/"** or a user want to refresh the application by clicking the refresh button in the browser while being on the server route other than this route **"/"**.

After doing all these above steps, run the app by opening `http://localhost:3000` in the browser. You will see **Welcome to React Router 4** along with **404 page not found** then **We are sorry but the page you are looking for does not exist**. On this route, it should return only return **Welcome to React Router 4** message. 

Now go to `http://localhost:3000/contact` and you will see **Hello, User** along with previous messages. Over here it should show only **Hello, User**.
Not like that.

Now go to `http://localhost:3000/jgfhds` i.e. route which is not defined and it will show **Home** and **Not Found** components content. Ideally, it should show us only **Not Found** component content.

So, Although we are looking for a particular defined route and its component but, going on a particular route shows us minimum 2 components. For us, it is **Home** and **Not Found**. Why it is so and how to handle it using **Exact** and **Switch** so that it will show us whatever is demanded, that we will see in the next chapter. 

Go to the next chapter: [Exact & Switch](/projects/IBD/repos/react_router_tutorials/browse/chapters/03_exact_switch)