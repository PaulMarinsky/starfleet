// This is the sign in layout also the landing page.

import React, { Component } from "react";
import { Link } from "react-router-dom";
import auth from "../auth";

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.password);
    console.log(this.state.email);

    fetch("/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        password: this.state.password,
        email: this.state.email
      })
    })
      .then(r => r.json())
      .then(data => {
        console.log(data);
      });
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <button className="FormField_Btn mr-20" onClick={this.handleSubmit}>
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
