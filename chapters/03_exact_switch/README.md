# Exact & Switch
Continuing the last chapter [Rendering with Routes](/projects/IBD/repos/react_router_tutorials/browse/chapters/02_rendering_with_routes), in which we were getting the multiple component contents for a requested route. To solve that problem we have to use **Exact** and **Switch**

## Exact 
### What is the problem in route without exact?
In this case, going on a route matches multiple pathname locations. Like suppose you have put `http://localhost:3000/contact` path in address bar then it will first match with route **"/"**, then it will match with the **"/contact"**. So in this case, it will show the two component even if you only requested one of them. 

### How to solve it using exact
By putting exact in the **\<Route />** tag we can avoid rendering of multiple matching routes. In that case, it will only render the matched path component. This can be done like this `<Route exact path="/" component={Home} />`. 

### What can not be solve using exact
*Exact* can not avoid to render *404* or *No Match* or *Not Found* route along with other routes. So at this stage after implementing **exact** minimum 1(*Not Found*) or maximum 2(*Not Found* & Matched Rendered Component) component will render for a particular URL. 


## Switch
### What is the problem in route without switch?
If we have **Not Found (404)** routes defined in our app and do not have **Switch** then, this *404* routes will always render irrespective to the requested routes as explained in above paragraph.

### How to solve it using switch
If we want to get a single component for a requested route then we need to enclose our *Routes* in *Switch* tag. Switch only allow to render first child `<Route />` that matches the current location and stopped looking for next matches. 

### The other case handled by Switch and Exact
Let add a route with parameter as `<Route path="/contact/:username" component={ContactUser} />` below `<Route path="/contact" component={Contact} />` with its component **ContactUser**. Now if you enter a url `http://localhost:3000/contact/rakesh` then you will see the component **Contact** in place of **ContactUser** component because the first matched route upto `http://localhost:3000/contact` serving the contents. Add ***exact*** in the route tag with path **"/contact"** to render the ***ContactUser*** component.

Now do the reverse one by adding `<Route path="/contact/:username" component={ContactUser} />` above `<Route path="/contact" component={Contact} />` with its component **ContactUser** and remove the recently added ***exact*** in the route tag with path **"/contact"**. Now for URL `http://localhost:3000/contact/rakesh` **ContactUser** component will render and for URL `http://localhost:3000/contact` **Contact** component will render which are the requested one. This is happening because of **Switch** search for requested route from top to bottom. So if you entered `http://localhost:3000/contact` then path `/contact/rakesh` doesn't match while next route path `/contact` will match and finally, it will render the requested path.

So play around with the code, remove and add **Switch**, **Route**, **exact** etc and see yourself the effect of those changes.

Go to the next chapter: [Different Ways of Rendering a Component](/projects/IBD/repos/react_router_tutorials/browse/chapters/04_different_ways_of_rendering_a_component)