const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    loginAttempts: Number,
    lockUntil: Number,
    nicename: String,
    email: String,
    role_id: mongoose.Schema.Types.ObjectId,
  },
  {
    collection: "users",
  }
);

module.exports = () => mongoose.model("User", userSchema);
