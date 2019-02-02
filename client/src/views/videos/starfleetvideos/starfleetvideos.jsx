
import React from "react";
import {
	Card,
	CardBody,

} from 'reactstrap';

class StarfleetVideos extends React.Component {
	render() {
		return (
			<div>
				<h1> STARFLEET TRAINING VIDEOS</h1>
			
					<div className="row">
					<div className="col-sm-3">
				   <video width="320" height="240"  controls>
				   <source src="https://s3.us-east-2.amazonaws.com/starfleets3aws/Sit.mp4" type="video/mp4" />
				   </video>
				</div>
					
				<div className="col-sm-3">
				   <video width="320" height="240" controls>
				   <source src="https://s3.us-east-2.amazonaws.com/starfleets3aws/Down.mp4" type="video/mp4" />
				   </video>
					</div>
					
				<div className="col-sm-3">
				   <video width="320" height="240" controls>
				   <source src="https://s3.us-east-2.amazonaws.com/starfleets3aws/Wait.mp4" type="video/mp4" />
				   </video>
				</div>
					
				<div className="col-sm-3">
				   <video width="320" height="240"  controls>
				   <source src="https://s3.us-east-2.amazonaws.com/starfleets3aws/Touch.mp4" type="video/mp4" />
				   </video>
				</div>
					
				<div className="col-sm-3">
				   <video width="320" height="240" controls>
				   <source src="https://s3.us-east-2.amazonaws.com/starfleets3aws/Gentle.mp4" type="video/mp4" />
				   </video>
				</div>
				</div>
				
			</div>
			



		);  
	}
}

export default StarfleetVideos;
