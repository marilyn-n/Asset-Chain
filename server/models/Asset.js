const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const assetDetails = {
  userId:String,
  assetName:{type: String},
  assetType: {type: String},
  beneficiaryName: {type: String},
  beneficiaryEmail: {type: String},
  description: {type: String},
  files: [{type:Buffer}],
  idTestament:{type: String}
}

const assetSchema = new Schema(assetDetails,
    { timestamps: 
      {
       createdAt: 'created_at' ,
       updatedAt: 'updated_at' }
})

const Asset = mongoose.model("Asset", assetSchema);

module.exports = Asset;
