/*import React from "react";
import {
	Card,
	CardBody,

} from 'reactstrap';

class MyVideos extends React.Component {
	render() {
		return (
			<Card>
				<CardBody>
					My personal training videos will display here
				</CardBody>
			</Card>
		);
	}
}

export default MyVideos;
*/

import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';


class myVideos extends Component {
constructor( props ) {
  super( props );
  this.state = {
   selectedFile: null,
   selectedFiles: null,
   videos: []
  }
    
 }
singleFileChangedHandler = ( event ) => {
  this.setState({
   selectedFile: event.target.files[0]
  });
 };
multipleFileChangedHandler = (event) => {
  this.setState({
   selectedFiles: event.target.files
  });
  console.log( event.target.files );
 };
singleFileUploadHandler = (  ) => {
  const data = new FormData();
// If file selected
  if ( this.state.selectedFile ) {
data.append( 'profileImage', this.state.selectedFile, this.state.selectedFile.name );
axios.post( '/api/profile-img-upload', data, {
    headers: {
     'accept': 'application/json',
     'Accept-Language': 'en-US,en;q=0.8',
     'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
    }
   })
    .then( ( response ) => {
if ( 200 === response.status ) {
      // If file size is larger than expected.
      if( response.data.error ) {
       if ( 'LIMIT_FILE_SIZE' === response.data.error.code ) {
        this.ocShowAlert( 'Max size: 300MB', 'red' );
       } else {
        console.log( response.data ); 
// If not the given file type
        this.ocShowAlert( response.data.error, 'red' );
       }
      } else {
       // Success
       let fileName = response.data;
        console.log('fileName', fileName);
        this.getVideos();
       this.ocShowAlert( 'File Uploaded', '#3089cf' );
      }
     }
    }).catch( ( error ) => {
    // If another error
    this.ocShowAlert( error, 'red' );
   });
  } else {
   // if file not selected throw error
   this.ocShowAlert( 'Please upload file', 'red' );
  }
};
multipleFileUploadHandler = () => {
  const data = new FormData();
let selectedFiles = this.state.selectedFiles;
// If file selected
  if ( selectedFiles ) {
   for ( let i = 0; i < selectedFiles.length; i++ ) {
    data.append( 'galleryImage', selectedFiles[ i ], selectedFiles[ i ].name );
   }
axios.post( '/routes/routes/multiple-file-upload', data, {
    headers: {
     'accept': 'application/json',
     'Accept-Language': 'en-US,en;q=0.8',
     'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
    }
   })
    .then( ( response ) => {
     console.log( 'res', response );
if ( 200 === response.status ) {
      // If file size is larger than expected.
      if( response.data.error ) {
       if ( 'LIMIT_FILE_SIZE' === response.data.error.code ) {
        this.ocShowAlert( 'Max size: 2MB', 'red' );
       } else if ( 'LIMIT_UNEXPECTED_FILE' === response.data.error.code ){
        this.ocShowAlert( 'Max 4 images allowed', 'red' );
       } else {
        // If not the given ile type
        this.ocShowAlert( response.data.error, 'red' );
       }
      } else {
       // Success
       let fileName = response.data;
       console.log( 'fileName', fileName );
       this.ocShowAlert( 'File Uploaded', '#3089cf' );
}
     }
    }).catch( ( error ) => {
    // If another error
    this.ocShowAlert( error, 'red' );
   });
  } else {
   // if file not selected throw error
   this.ocShowAlert( 'Please upload file', 'red' );
  }
};
// ShowAlert Function
 ocShowAlert = ( message, background = '#3089cf' ) => {
  let alertContainer = document.querySelector( '#oc-alert-container' ),
   alertEl = document.createElement( 'div' ),
   textNode = document.createTextNode( message );
  alertEl.setAttribute( 'class', 'oc-alert-pop-up' );
  $( alertEl ).css( 'background', background );
  alertEl.appendChild( textNode );
  alertContainer.appendChild( alertEl );
  setTimeout( function () {
   $( alertEl ).fadeOut( 'slow' );
   $( alertEl ).remove();
  }, 3000 );
 };
 
  getVideos() {
    axios.get('api/list-videos')
    .then((response) => {
      // console.log("But I'm even faster!");
      console.log(response);

      let videos = response.data.Contents.map((obj) => {
        return obj.Key;
      })
      this.setState({
        videos
      })
    })
 }
  
 componentDidMount() {
   this.getVideos();
 }

  renderVideo(video) { 
    return (
        <div className='col-sm-3'>
    <video width="320" height="240" controls>
        <source src={ "https://s3.us-east-2.amazonaws.com/starfleetuploads3/" + video } type="video/mp4" />
        </video>
        </div>
    )
  }
  


render() {
  return (

    <div>
      <h1>MY VIDEOS</h1>

      <div className="container">
     {/* For Alert box*/}
     <div id="oc-alert-container"></div>
{/* Single File Upload*/}
     <div className="card border-light mb-3 mt-5" style={{ boxShadow: '0 5px 10px 2px rgba(195,192,192,.5)' }}>
      <div className="card-header">
       <h4 style={{ color: '#555', marginLeft: '10px' }}>Upload a New Video</h4>
            {/*  <p className="text-muted" style={{ marginLeft: '12px' }}>Upload Size: 250px x 250px ( Max 2MB )</p> */}
      </div>
      <div className="card-body">
            {/*  <p className="card-text">Please upload an image for your profile</p> */}
       <input type="file" onChange={this.singleFileChangedHandler}/>
       <div className="mt-5">
        <button className="btn btn-info" onClick={this.singleFileUploadHandler}>Upload</button>
       </div>
      </div>
     </div>
        {/* Multiple File Upload 
     <div className="card border-light mb-3" style={{ boxShadow: '0 5px 10px 2px rgba(195,192,192,.5)' }}>
      <div className="card-header">
       <h3 style={{ color: '#555', marginLeft: '12px' }}>Upload Muliple Images</h3>
       <p className="text-muted" style={{ marginLeft: '12px' }}>Upload Size: 400px x 400px ( Max 2MB )</p>
      </div>
      <div className="card-body">
       <p className="card-text">Please upload the Gallery Images for your gallery</p>
       <input type="file" multiple onChange={this.multipleFileChangedHandler}/>
       <div className="mt-5">
        <button className="btn btn-info" onClick={this.multipleFileUploadHandler}>Upload!</button>
       </div>
      </div>
</div> */}
</div>

		  <div className="row">

        {this.state.videos.map((video) => {
          return this.renderVideo(video);
        })
        }

		  </div>

  
    
   </div>
  );
 }
}
export default myVideos;