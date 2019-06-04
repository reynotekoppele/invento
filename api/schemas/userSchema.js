const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltWorkFactor = 10;
const maxLoginAttempts = 5;
const lockTime = 2 * 60 * 60 * 1000;

const userSchema = new mongoose.Schema(
  {
    username: {type: String, required: true, index: {unique: true}},
    password: {type: String, required: true},
    loginAttempts: {type: Number, required: true, default: 0},
    lockUntil: {type: Number},
    nicename: {type: String},
    email: {type: String},
    firstTime: {type: Boolean, default: true},
    house: {type: String},
    fontSize: {type: String},
    experience: {type: Boolean},
    subscription: {type: String},
    role_id: mongoose.Schema.Types.ObjectId,
  },
  {
    collection: "users",
  }
);

userSchema.statics.failedLogin = {
  NOT_FOUND: 0,
  PASSWORD_INCORRECT: 1,
  MAX_ATTEMPTS: 2,
};

userSchema.virtual("isLocked").get(function() {
  return !!(this.lockUntil && this.lockUntil > Date.now());
});

userSchema.pre("save", function(next) {
  if (!this.isModified("password")) return next();

  bcrypt.genSalt(saltWorkFactor, (error, salt) => {
    if (error) return next(error);

    bcrypt.hash(this.password, salt, (error, hash) => {
      if (error) return next(error);

      this.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(error, isMatch) {
    if (error) return cb(error);
    cb(null, isMatch);
  });
};

userSchema.methods.incLoginAttempts = function(cb) {
  if (this.lockUntil && this.lockUntil < Date.now()) {
    return this.update(
      {
        $set: {loginAttempts: 1},
        $unset: {lockUntil: 1},
      },
      cb
    );
  }

  const updates = {$inc: {loginAttempts: 1}};
  if (this.loginAttempts + 1 >= maxLoginAttempts && !this.isLocked) {
    updates.$set = {lockUntil: Date.now() + lockTime};
  }

  return this.update(updates, cb);
};

const reasons = (userSchema.statics.failedLogin = {
  NOT_FOUND: 0,
  PASSWORD_INCORRECT: 1,
  MAX_ATTEMPTS: 2,
});

userSchema.statics.getAuthenticated = function(username, password, cb) {
  this.findOne({username: username}, function(error, user) {
    if (error) return cb(error);

    if (!user) return cb(null, null, reasons.NOT_FOUND);

    if (user.isLocked) {
      return user.incLoginAttempts(function(error) {
        if (error) {
          return cb(error);
        } else {
          return cb(null, null, reasons.MAX_ATTEMPTS);
        }
      });
    }

    user.comparePassword(password, function(error, isMatch) {
      if (error) return cb(error);

      if (isMatch) {
        if (!user.loginAttempts && !user.lockUntil) return cb(null, user);

        const updates = {
          $set: {loginAttempts: 0},
          $unset: {lockUntil: 1},
        };

        return user.update(updates, function(error) {
          if (error) return cb(error);
          return cb(null, user);
        });
      }

      user.incLoginAttempts(function(error) {
        if (error) return cb(error);
        return cb(null, null, reasons.PASSWORD_INCORRECT);
      });
    });
  });
};

module.exports = () => mongoose.model("User", userSchema);
