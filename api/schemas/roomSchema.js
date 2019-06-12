const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    name: String,
    icon: String,
    devices: Array,
  },
  {
    collection: "rooms",
  }
);

module.exports = () => mongoose.model("Room", roomSchema);
