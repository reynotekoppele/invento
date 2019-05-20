const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema(
  {
    name: String,
    canEditGraphs: Boolean,
    canEditProfile: Boolean,
    canEditActions: Boolean,
    canEditDevices: Boolean,
    canSeeGraphs: Boolean,
    canSeeProfile: Boolean,
    canSeeActions: Boolean,
    canSeeDevices: Boolean,
  },
  {
    collection: "roles",
  }
);

module.exports = () => mongoose.model("Role", roleSchema);
