const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const testamentSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  description: { type: String },
  executorEmail: String,
  assets: [{ type: Schema.Types.ObjectId, ref: 'Asset' }],
  password: { type: String },
  BlockchainSecret: { type: String },
  BlockchainIndex: { type: Number },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

const Testament = mongoose.model('Testament', testamentSchema);
module.exports = Testament;
