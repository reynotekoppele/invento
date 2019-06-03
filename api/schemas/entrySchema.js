const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema(
  {
    device_id: mongoose.Schema.Types.ObjectId,
    datetime: Date,
    action_id: mongoose.Schema.Types.ObjectId,
    user_id: mongoose.Schema.Types.ObjectId,
  },
  {
    collection: "entries",
  }
);

module.exports = () => mongoose.model("Entry", entrySchema);
