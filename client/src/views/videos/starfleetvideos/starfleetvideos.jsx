
import React from "react";
import {
	Card,
	CardBody,

} from 'reactstrap';

class StarfleetVideos extends React.Component {
	render() {
		return (
		   <Card>
		     <CardBody>			
				<div>
				   <video width="146" height="96"  controls>
				   <source src="https://s3.us-east-2.amazonaws.com/starfleets3aws/Sit.mp4" type="video/mp4" />
				   </video>
				</div>
					
				<div>
				   <video width="146" height="96" controls>
				   <source src="https://s3.us-east-2.amazonaws.com/starfleets3aws/Down.mp4" type="video/mp4" />
				   </video>
					</div>
					
				<div>
				   <video width="146" height="96" controls>
				   <source src="https://s3.us-east-2.amazonaws.com/starfleets3aws/Wait.mp4" type="video/mp4" />
				   </video>
				</div>
					
				<div>
				   <video width="146" height="96"  controls>
				   <source src="https://s3.us-east-2.amazonaws.com/starfleets3aws/Touch.mp4" type="video/mp4" />
				   </video>
				</div>
					
				<div>
				   <video width="146" height="96" controls>
				   <source src="https://s3.us-east-2.amazonaws.com/starfleets3aws/Gentle.mp4" type="video/mp4" />
				   </video>
				</div>
			
			



				</CardBody>
			</Card>
		);  
	}
}

export default StarfleetVideos;
