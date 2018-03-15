const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const testamentSchema = new Schema({
owner: {type: String},
description:{type: String}
},{
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  },
  docs: [{ 
    documentName: {type:String}, 
    documentId: {type:String}, 
    documentString: {type:String},
    updatedAt: {type:String}
    }]
});



const Testament = mongoose.model("Testament", testamentSchema);
module.exports = Testament;
