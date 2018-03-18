const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const assetSchema = new Schema({
  idTestament:{ type: Schema.Types.ObjectId, ref: 'Testament'},
  title:{type:String},
  emailTo: {type: String},
  description: {type: String},
  docs: [{type:String}]
  }, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  },
  });


const Asset = mongoose.model("Asset", assetSchema);
module.exports = Asset;
