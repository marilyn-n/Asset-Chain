const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const assetDetails = {
  userId:String,
  name: String,
  assetType: String,
  beneficiaryName: {type: String},
  beneficiaryEmail: {type: String},
  description: {type: String},
  files: [{type:Buffer}]
}

const assetSchema = new Schema(assetDetails,
    { timestamps: 
      { createdAt: 'created_at' ,
       updatedAt: 'updated_at' }
})

const Asset = mongoose.model("Asset", assetSchema);

module.exports = Asset;