const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const AssetSchema = new Schema({
  userId:String,
  assetName:{type: String},
  assetType: {type: String},
  beneficiaryName: {type: String},
  beneficiaryEmail: {type: String},
  description: {type: String},
  file: {type:String},
  idTestament:{type: Schema.Types.ObjectId, ref: 'Testament'}
},{
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Asset = mongoose.model('Asset', AssetSchema);
module.exports = Asset;