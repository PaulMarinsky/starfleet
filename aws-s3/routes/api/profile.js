// route/api/profile.js
const express = require('express');
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');
const multer = require('multer');
const path = require('path');

const cred = require('dotenv').config();
/**
 * express.Router() creates modular, mountable route handlers
 * A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.
 */
const router = express.Router();
/**
 * PROFILE IMAGE STORING STARTS
 */
const s3 = new aws.S3({
  accessKeyId: process.env.STARFLEETUPLOADS3_ACCESS,
  secretAccessKey: process.env.STARFLEETUPLOADS3_SECRET,
  Bucket: process.env.STARFLEETUPLOADS3_BUCKET
});
/**
 * Single Upload
 */
const profileImgUpload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.STARFLEETUPLOADS3_BUCKET,
    acl: 'public-read',
    key: function (req, file, cb) {
      cb(null, path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now() + path.extname(file.originalname))
    }
  }),
  limits: {
    fileSize: 200000000
  }, // In bytes: 200000000 bytes = 200 MB
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  }
}).single('profileImage');
/**
 * Check File Type
 * @param file
 * @param cb
 * @return {*}
 */
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif|mp4/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);
  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}
/**
 * @route POST api/profile/business-img-upload
 * @desc Upload post image
 * @access public
 */
router.post('/profile-img-upload', (req, res) => {
  profileImgUpload(req, res, (error) => {
    // console.log( 'requestOkokok', req.file );
    // console.log( 'error', error );
    if (error) {
      console.log('errors', error);
      res.json({
        error: error
      });
    } else {
      // If File not found
      if (req.file === undefined) {
        console.log('Error: No File Selected!');
        res.json('Error: No File Selected');
      } else {
        // If Success
        const imageName = req.file.key;
        const imageLocation = req.file.location;
        // Save the file name into database into profile model
        res.json({
          image: imageName,
          location: imageLocation
        });
      }
    }
  });
});
// End of single profile upload
/**
 * BUSINESS GALLERY IMAGES
 * MULTIPLE FILE UPLOADS
 */
// Multiple File Uploads ( max 4 )
const uploadsBusinessGallery = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.STARFLEETUPLOADS3_BUCKET,
    acl: 'public-read',
    key: function (req, file, cb) {
      cb(null, path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now() + path.extname(file.originalname))
    }
  }),
  limits: {
    fileSize: 200000000
  }, // In bytes: 200000000 bytes = 200 MB
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  }
}).array('galleryImage', 4);
/**
 * @route POST /api/profile/business-gallery-upload
 * @desc Upload business Gallery images
 * @access public
 */
router.post('/multiple-file-upload', (req, res) => {
  uploadsBusinessGallery(req, res, (error) => {
    console.log('files', req.files);
    if (error) {
      console.log('errors', error);
      res.json({
        error: error
      });
    } else {
      // If File not found
      if (req.files === undefined) {
        console.log('Error: No File Selected!');
        res.json('Error: No File Selected');
      } else {
        // If Success
        let fileArray = req.files,
          fileLocation;
        const galleryImgLocationArray = [];
        for (let i = 0; i < fileArray.length; i++) {
          fileLocation = fileArray[i].location;
          console.log('filenm', fileLocation);
          galleryImgLocationArray.push(fileLocation)
        }
        // Save the file name into database
        res.json({
          filesArray: fileArray,
          locationArray: galleryImgLocationArray
        });
      }
    }
  });
});

//------ Route to handle listing videos -----
router.get('/list-videos', (req, res) => {
  const s3 = new aws.S3({
    accessKeyId: process.env.STARFLEETUPLOADS3_ACCESS,
    secretAccessKey: process.env.STARFLEETUPLOADS3_SECRET,
    Bucket: process.env.STARFLEETUPLOADS3_BUCKET
  });

  const params = {
    Bucket: process.env.STARFLEETUPLOADS3_BUCKET,
  }

  s3.listObjects(params, function (err, data) {
    if (err) throw err;
    console.log(data);
    res.json(data);
  });
})


// We export the router so that the server.js file can pick it up
module.exports = router;