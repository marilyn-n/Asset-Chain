const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const assetSchema = new Schema({
  file: {type: String},
  email: {type: String},
  testamentId: {type: String},
  description: {type: String}
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});


const Asset = mongoose.model("Asset", assetSchema);
module.exports = Asset;
