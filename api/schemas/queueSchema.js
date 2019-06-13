const mongoose = require("mongoose");

const queueSchema = new mongoose.Schema(
  {
    name: String,
  },
  {
    collection: "queue",
  }
);

module.exports = () => mongoose.model("Queue", queueSchema);
