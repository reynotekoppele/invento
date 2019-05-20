const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: String,
    description: String
  },
  {
    collection: "categories"
  }
);

module.exports = () => mongoose.model("Category", categorySchema);
