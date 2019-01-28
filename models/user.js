const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  fullname: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
});

//authenticate input against database
UserSchema.statics.authenticate = (email, password, callback) => {
  console.log("Came to validation");
  console.log(email + "  " + password);
  User.findOne({ email: email }).exec((err, user) => {
    console.log("In find one");
    if (err) {
      return callback(err);
    } else if (!user) {
      const err = new Error("User not found.");
      err.status = 401;
      return callback(err);
    }
    console.log("In find one 2");
    bcrypt.compare(password, user.password, (err, result) => {
      console.log("in compare");
      if (result === true) {
        console.log("result is true");
        return callback(null, user);
      } else {
        console.log("result is FALSE");
        return callback();
      }
    });
  });
};

//hashing a password before saving it to the database
UserSchema.pre("save", function(next) {
  console.log("came to PRE");
  const user = this;
  console.log(user);
  // const salt = bycrypt.genSaltSync(10);
  bcrypt.hash(user.password, bcrypt.genSaltSync(10), null, function(err, hash) {
    console.log("made it to hash");
    if (err) {
      console.log(err);
      return next(err);
    }
    user.password = hash;
    next();
  });
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
