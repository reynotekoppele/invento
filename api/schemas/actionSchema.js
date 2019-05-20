const mongoose = require("mongoose");

const actionSchema = new mongoose.Schema(
  {
    name: String,
    actions: Array,
  },
  {
    collection: "actions",
  }
);

module.exports = () => mongoose.model("Action", actionSchema);
