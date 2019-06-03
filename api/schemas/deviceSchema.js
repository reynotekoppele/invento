const mongoose = require("mongoose");

const deviceSchema = new mongoose.Schema(
  {
    name: String,
    category_id: mongoose.Schema.Types.ObjectId,
    action_id: mongoose.Schema.Types.ObjectId,
  },
  {
    collection: "devices",
  }
);

module.exports = () => mongoose.model("Device", deviceSchema);
