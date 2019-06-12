const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    name: String,
    icon: String,
    devices: Array,
    user_id: mongoose.Schema.Types.ObjectId,
  },
  {
    collection: "rooms",
  }
);

module.exports = () => mongoose.model("Room", roomSchema);
