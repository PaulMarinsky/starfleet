import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import {
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	Input,
	CustomInput,
	FormGroup,
	Form,
	Row,
	Col,
//	UncontrolledTooltip,
	Button
} from 'reactstrap';
import img1 from '../../assets/images/logo-light-icon.png';
import img2 from '../../assets/images/background/dogBackground2.png';

const sidebarBackground = {
	backgroundImage: "url(" + img2 + ")",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "center",	
};

class Login extends Component {	
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
	  
		  fetch("/api/signin", {
			method: "POST",
			headers: {
			  Accept: "application/json",
			  "Content-Type": "application/json"
			},
			body: JSON.stringify({
			  password: this.state.password,
			  email: this.state.email
			})

		  }).then(r=> {
			  console.log(r.status);
			  console.log(r);
			})
		//   .then(data => {
		// 	console.log(data);			
		//   });
		};	 

		handleChange = event => {
		  event.preventDefault();
		  this.setState({
			[event.target.name]: event.target.value
		  });
		};
		
		handleClick() {
			var elem = document.getElementById('loginform');
			elem.style.transition = "all 2s ease-in-out";
			elem.style.display = "none";
			document.getElementById('recoverform').style.display = "block";
		}
	
	render() {
		return <div className="">
			{/*--------------------------------------------------------------------------------*/}
			{/*Login Cards*/}
			{/*--------------------------------------------------------------------------------*/}
			<div className="auth-wrapper d-flex no-block justify-content-center align-items-center" style={sidebarBackground}>
				<div className="auth-box on-sidebar">
					<div id="loginform">
						<div className="logo">
							<span className="db"><img src={img1} alt="logo" /></span>
							<h5 className="font-medium mb-3">Sign Into Starfleet</h5>
						</div>
						<Row>
							<Col xs="12">
								<Form className="mt-3" id="login-form" onSubmit={this.handleSubmit}>
									<InputGroup className="mb-3">
										<InputGroupAddon addonType="prepend">
											<InputGroupText>
												<i className="ti-user"></i>
											</InputGroupText>
										</InputGroupAddon> 
										<Input type="email" name="email" placeholder="Email" required onChange={this.handleChange}/>
									</InputGroup>
									<InputGroup className="mb-3">
										<InputGroupAddon addonType="prepend">
											<InputGroupText>
												<i className="ti-pencil"></i>
											</InputGroupText>
										</InputGroupAddon>
										<Input type="password" name="password" placeholder="Password" required onChange={this.handleChange}/>
									</InputGroup>
									<div className="d-flex no-block align-items-center mb-3">
										<CustomInput type="checkbox" id="exampleCustomCheckbox" label="Remember Me" />
										<div className="ml-auto">
											<a href="#recoverform" id="to-recover" onClick={this.handleClick} className="forgot text-dark float-right"><i className="fa fa-lock mr-1"></i> Forgot pwd?</a>
										</div>
									</div>
									<Row className="mb-3">
										<Col xs="12">
											<Button color="info" size="lg" type="submit" onClick={this.handleSubmit} block>Log In</Button>
										</Col>
									</Row>
								
									<div className="text-center">
										Don't have an account? <Link to="/authentication/register" className="text-info ml-1"><b>Click Here</b></Link>
									</div>
								</Form>
							</Col>
						</Row>
					</div>
					<div id="recoverform">
						<div className="logo">
							<span className="db"><img src={img1} alt="logo" /></span>
							<h5 className="font-medium mb-3">Recover Password</h5>
							<span>Enter your Email and instructions will be sent to you!</span>
						</div>
						<Row className="mt-3">
							<Col xs="12">
								<Form action="/dashboard">
									<FormGroup>
										<Input type="text" name="uname" bsSize="lg" id="Name" placeholder="email@domain.com" required />
									</FormGroup>
									<Row className="mt-3">
										<Col xs="12">
											<Button color="info" size="lg" type="submit" block>Reset</Button>
										</Col>
									</Row>
								</Form>
							</Col>
						</Row>
					</div>
				</div>
			</div>
		</div>;
	}
}

export default Login;