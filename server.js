const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
// const Data = require("./data");
const session = require('express-session');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const axios = require('axios');
const path = require('path');

const app = express();
const router = express.Router();

const PORT = process.env.PORT || 3001;

// include routes
const routes = require('./routes/routes');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Connect to the Mongo DB
// || "mongodb://localhost/starfleet"
mongoose.connect(
  process.env.MONGOLAB_URI,
  { useNewUrlParser: true }
);
mongoose.set('useCreateIndex', true);

const db = mongoose.connection;

// handle mongo error
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  // we connected
});

//use sessions for tracking logins
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);
// app.use(
//   session({
//     secret: "work hard",
//     resave: true,
//     saveUninitialized: false
//     // store: new MongoStore({
//     //   mongooseConnection: db
//     // })
//   })
// );

// parse incoming requests
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// proxy headers
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use('/api', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

// error handler
// define as the last app.use callback
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message);
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
