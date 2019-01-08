import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends Component {

    render() {
        return (
            
            <div className="FormCenter">
            <form className="FormFields" onSubmit={this.handleSubmit}>
              
              <div className="FormField">
                <label className="formField_Label" htmlFor="name">FullName</label>
                <input type="text" id="name" className="FormField_Input" placeholder="Enter your full 
                name" name="name" />
              </div>
        
              <div className="FormField">
                <label className="formField_Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField_Input" placeholder="Enter your password"
                  name="password" />
              </div>

              <div className="FormField">
                <label className="formField_Label" htmlFor="email">E-Mail</label>
                <input type="email" id="email" className="FormField_Input" placeholder="Enter your email" 
                  name="email" />
              </div>

              <div className="FormField">
                <label className="FormField_CheckboxLabel">
                  <input className="FormField_Checkbox" type="checkbox" name="hasAgreed" /> I agree 
                  with the <a href="" className="FormField_Terms">terms of service</a>
                </label>
              </div>
            
              <div className="FormField">
                <button className="FormField_Btn mr-20">Sign Up</button> <Link to="/sign-in"
                className="FormField_link">Already a member</Link>
              </div>
            
            </form>
          
            </div>    
        );
    
    }
}

export default SignUpForm;