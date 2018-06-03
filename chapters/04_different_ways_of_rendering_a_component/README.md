# Different Ways of Rendering a Component
There are 2 different ways to render a component in the `<Route />` tag. We will discuss them one by one.

1. **Component:** Generally used while rendering a react component which does not have props. For example- `<Route exact path="/" component={Home} />`.
2. **Render:** This is similar to the **Component**, but useful for inline rendering and passing extra props to the element.
    * Inline Rendering: `<Route path="/contact" render={() => <div><h1 className="text-center">Hello, User</h1></div>} />`.
    * Rendering with props: Will cover broadly in [Chapter 9](/projects/IBD/repos/react_router_tutorials/browse/chapters/09_passing_props_to_a_stateless_component) but a simple way to do it, is like this- `<Route path="/contact:username" render={<ContactUser {...props} surname="Sharma" />} />`.

Go to the next chapter: [Navigation with links](/projects/IBD/repos/react_router_tutorials/browse/chapters/05_navigation_with_links)