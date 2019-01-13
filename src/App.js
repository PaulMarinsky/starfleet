import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import { LandingPage } from './components/LandingPage'
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App">
        <h1>Testing</h1>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/sign-up" component={SignUpForm} />
        <Route exact path="/login" component={SignInForm} />
      </div>
      // <Router>
      //   <div className="App">
      //     <div className="App_Aside"></div>
      //     <div className="App_Form">

      //       <div className="PageSwitcher">
      //         <NavLink to="/sign-in" activeClassName="PageSwitcher_Item-Active"
      //           className="PageSwitcher_Item">Sign In</NavLink>
      //         <NavLink exact to="/" activeClassName="PageSwitcher_Item-Active"
      //           className="PageSwitcher_Item">Sign Up</NavLink>
      //       </div>

      //       <div className="FormTitle">
      //         <NavLink to="/sign-in" activeClassName="FormTitle_Link-Active"
      //           className="FormTitle_Link">Sign In</NavLink> or <NavLink exact to="/"
      //             activeClassName="FormTitle_Link-Active" className="FormTitle_Link-Active">Sign Up</NavLink>
      //       </div>

      //       <Route exact path="/" component={SignUpForm}>

      //       </Route>

      //       <Route path="/sign-in" component={SignInForm}>
      //         <h1>Sign In</h1>
      //       </Route>

      //     </div>

      //   </div>

      // </Router >

    );
  }
}

export default App;
