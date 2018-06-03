# Navigation with Link
The `<Link>` provides a primary way to allow users to navigate around your application for the routes. `<Link>` will render a fully accessible anchor tag with the proper href. If you already have a navigation bar then enclose the `<Link>` within navigation bar. Example-
```
<ul className="nav navbar-nav">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/contact">Contact</Link></li>
</ul>
```

# Styling with NavLink
`NavLink` is a special version of the `<Link>` to add the style to the rendered element. It can be implemented like this-
```
<ul className="nav navbar-nav">
  <li><NavLink to="/" exact activeStyle={{ color: 'green' }}>Home</NavLink></li>
  <li><NavLink to="/contact" activeStyle={{ color: 'green' }}>Contact</NavLink></li>
</ul>
```
The `exact` in the *Home* `<NavLink>` needs to be added, otherwise the *Home* will always visible as active link. Try removing the exact and see yourself.

Go to the next chapter: [Routes with Parameter](/projects/IBD/repos/react_router_tutorials/browse/chapters/06_routing_with_parameter)