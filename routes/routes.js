const express = require("express");
const router = express.Router();
const User = require("../models/user");

//POST route for updating data
router.post("/signup", (req, res, next) => {
  console.log("MADE it to API");
  // confirm that user typed same password twice
  // if (req.body.password !== req.body.passwordConf) {
  //   const err = new Error("Passwords do not match.");
  //   err.status = 400;
  //   res.send("passwords dont match");
  //   return next(err);
  // }

  console.log("PASSWORD SET");
  console.log(req.body.email);
  console.log(req.body.fullname);

  if (req.body.email && req.body.fullname && req.body.password) {
    const userData = {
      email: req.body.email,
      fullname: req.body.fullname,
      password: req.body.password
    };

    User.create(userData, (error, user) => {
      console.log(userData);
      if (error) {
        console.log(error);
        return res.json(error);
      } else {
        res.send(userData);
        console.log("made it HERE");
      }
    });
  } else if (req.body.logemail && req.body.logpassword) {
    User.authenticate(
      req.body.logemail,
      req.body.logpassword,
      (error, user) => {
        if (error || !user) {
          const err = new Error("Wrong email or password.");
          err.status = 401;
          return next(err);
        } else {
          req.session.userId = user._id;
          return res.redirect("/app");
        }
      }
    );
  } else {
    const err = new Error("All fields required.");
    err.status = 400;
    return next(err);
  }
});

// GET route after registering
router.get("/app", (req, res, next) => {
  User.findById(req.session.userId).exec((error, user) => {
    if (error) {
      return next(error);
    } else {
      if (user === null) {
        const err = new Error("Not authorized! Go back!");
        err.status = 400;
        return next(err);
      } else {
        return res.send("Notauthenticated");
      }
    }
  });
});

// GET for logout logout
router.get("/", (req, res, next) => {
  if (req.session) {
    // delete session object
    req.session.destroy(err => {
      if (err) {
        return next(err);
      } else {
        return res.redirect("/");
      }
    });
  }
});

module.exports = router;
