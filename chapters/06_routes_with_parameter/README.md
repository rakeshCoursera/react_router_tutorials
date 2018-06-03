# Routes With Parameter
We already have a route with a param `:username` which we have implemented in [Chapter 3](/projects/IBD/repos/react_router_tutorials/browse/chapters/03_exact_switch). It has been done by putting this route-
```
<Route path="/contact/:username" render={props => <ContactUser {...props} surname="Sharma" />} />
```

### Route With Optional Parameter
An optional parameter can also be added in the route by putting **?** in the end of param as `:number?` and in the route as
```
<Route path="/contact/:username/:number?" render={props =><ContactUser {...props} surname="Sharma" />} />
```
Go to the next chapter:[Passing Props to a Stateless Component](/projects/IBD/repos/react_router_tutorials/browse/chapters/07_passing_props_to_a_stateless_component)