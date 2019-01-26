// This is the sign in layout also the landing page.

import React, { Component } from "react";
import { Link } from "react-router-dom";
import auth from "../auth";

class SignInForm extends Component {
  signIn = event => {
    event.preventDefault();
    console.log("in the signin function");
    fetch("api/app").then(res => {
      console.log(res.json());
    });
  };

  render() {
    return (
      <div className="FormCenter">
        <form className="FormFields">
          <div className="FormField">
            <label className="formField_Label" htmlFor="email">
              E-Mail
            </label>
            <input
              type="email"
              id="email"
              className="FormField_Input"
              placeholder="Enter your email"
              name="email"
            />
          </div>

          <div className="FormField">
            <label className="formField_Label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="FormField_Input"
              placeholder="Enter your password"
              name="password"
            />
          </div>

          <div className="FormField">
            <button className="FormField_Btn mr-20" onClick={this.signIn}>
              Sign In
            </button>

            <Link to="/signup" className="FormField_link">
              Create an account
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;