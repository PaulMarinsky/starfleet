const express = require("express");
const router = express.Router();
const User = require("../models/user");
const session = require("express-session");

//POST route for updating data
router.post("/signup", (req, res, next) => {
  console.log("MADE it to API");

  console.log("PASSWORD SET");
  console.log(req.body.email);
  console.log(req.body.fullname);

  if (req.body.email && req.body.fullname && req.body.password) {
    const userData = {
      email: req.body.email,
      fullname: req.body.fullname,
      password: req.body.password
    };
    console.log("signup before create");
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
  } else {
    const err = new Error("All fields required.");
    err.status = 400;
    return next(err);
  }
});

router.post("/signin", (req, res, next) => {
  // console.log(res);
  console.log("IM HERES!");
  if (req.body.email && req.body.password) {
    console.log("made it b4 auth!!!");
    User.authenticate(req.body.email, req.body.password, (error, user) => {
      if (error || !user) {
        const err = new Error("Wrong email or password.");
        err.status = 401;
        return next(err);
      } else {
        console.log("this is the user ID:::" + user._id);
        req.session.userId = user._id;
        return res.json(user._id);
      }
    });
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
