import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignInForm extends Component {

    render() {
        return (
            
            <div className="FormCenter">
            <form className="FormFields" onSubmit={this.handleSubmit}>

              <div className="FormField">
                <label className="formField_Label" htmlFor="email">E-Mail</label>
                <input type="email" id="email" className="FormField_Input" placeholder="Enter your email" 
                  name="email" />
              </div>
                    
              <div className="FormField">
                <label className="formField_Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField_Input" placeholder="Enter your password"
                  name="password" />
              </div>

            
              <div className="FormField">
                <button className="FormField_Btn mr-20">Sign In</button> <Link to="/"
                className="FormField_link">Create an account</Link>
              </div>
            
            </form>
          
            </div>    
        );
    
    }
}

export default SignInForm;