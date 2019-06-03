const mongoose = require("mongoose");

const queueSchema = new mongoose.Schema(
  {
    device_id: mongoose.Schema.Types.ObjectId,
    datetime: Date,
    action_id: mongoose.Schema.Types.ObjectId,
    user_id: mongoose.Schema.Types.ObjectId,
  },
  {
    collection: "queue",
  }
);

module.exports = () => mongoose.model("Queue", queueSchema);
