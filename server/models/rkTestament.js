const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const testamentDetails = {
    userId: String,
    testamentText: String,
    executorEmail: String,
    assetId: String,
    password: String,
    BlockchainSecret: String,
    BlockchainIndex = Number
  }

const testamentSchema = new Schema(testamentDetails,
  { timestamps: 
    { createdAt: 'created_at' ,
     updatedAt: 'updated_at' }
})

const Testament = mongoose.model("Asset", testamentSchema);

module.exports = Testament;