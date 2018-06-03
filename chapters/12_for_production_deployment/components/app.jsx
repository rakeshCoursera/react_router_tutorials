import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Nav from './nav.jsx';
import Home from './home.jsx';
import ContactUser from './contactUser.jsx';
import Form from './form.jsx';
import Topics from './topics.jsx';
import NotFound from './notFound.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: null,
    };
    this.onHandleChangeInput = this.onHandleChangeInput.bind(this);
    this.onHandleReset = this.onHandleReset.bind(this);
  }

  onHandleChangeInput(val) {
    this.setState({ inputValue: val });
  }

  onHandleReset() {
    this.setState({ inputValue: null });
  }

  render() {
    return (
      <div>
        <Nav>
          <ul className="nav navbar-nav">
            <li><NavLink to="/" exact activeStyle={{ color: 'green' }}>Home</NavLink></li>
            <li><NavLink to="/contact" activeStyle={{ color: 'green' }} >Contact</NavLink></li>
            <li><NavLink to="/form" activeStyle={{ color: 'green' }}>Form</NavLink> </li>
            <li><NavLink to="/topics" activeStyle={{ color: 'green' }}>Topics</NavLink></li>
          </ul>
        </ Nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact/:username/:number?" render={props =>
            <ContactUser {...props} surname="Sharma" />} />
          <Route path="/contact"
            render={() => <div><h1 className="text-center">Hello, User</h1></div>} />
          <Route path="/form/:type?" render={props =>
            <Form
              {...props}
              inputValue={this.state.inputValue}
              onHandleChangeValue={this.onHandleChangeInput}
              onResetClick={this.onHandleReset}
            />}
          />
          <Route path="/topics" component={Topics} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

module.exports = App;
