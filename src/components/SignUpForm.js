import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      fullname: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.fullname);
    console.log(this.state.password);
    console.log(this.state.email);
    fetch('api/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullname: this.state.fullname,
        password: this.state.password,
        email: this.state.email
      })
    })
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      
      <div className="FormCenter">
      <form className="FormFields" onSubmit={this.handleSubmit}>
        
        <div className="FormField">
          <label className="formField_Label" htmlFor="name">FullName</label>
            <input type="text" name="fullname" className="FormField_Input" placeholder="Enter your full 
          name" onChange={this.handleChange}/>
        </div>
  
        <div className="FormField">
          <label className="formField_Label" htmlFor="password">Password</label>
          <input type="password" name="password" className="FormField_Input" placeholder="Enter your password"
              name="password" onChange={this.handleChange}/>
        </div>

        <div className="FormField">
          <label className="formField_Label" htmlFor="email">E-Mail</label>
          <input type="email" name="email" className="FormField_Input" placeholder="Enter your email" 
              name="email" onChange={this.handleChange}/>
        </div>

        <div className="FormField">
          <label className="FormField_CheckboxLabel">
            <input className="FormField_Checkbox" type="checkbox" name="hasAgreed" /> 
            I agree with the <a href="" className="FormField_Terms">terms of service</a>
          </label>
        </div>
      
        <div className="FormField">
          <button className="FormField_Btn mr-20" type="Submit">Sign Up</button> 
          <Link to="/sign-in" className="FormField_link">Already a member</Link>
        </div>
      
      </form>
    
      </div>    
    );

  }
}

export default SignUpForm;