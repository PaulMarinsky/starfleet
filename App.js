import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
//import SignUpForm from './components/SignUpForm';
import SignInForm from './views/authentication/login';
import { ProtectedRoute } from './protected.route';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Testing</h1>
        <Router>
        <Switch>
          <Route exact path="/" component={SignInForm} />
          <Route exact path="/signup" component={SignUpForm} />
          <ProtectedRoute exact path="/app" component={LandingPage} />
          <Route path="*" component={() => '404 NOT FOUND'} />
        </Switch>
        </Router>
      </div>
    );
  }
}

export default App;