const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  lastName: String,
  email: String,
  password: String,
  picPath: String,
  testament: {
    type: Schema.Types.ObjectId,
    ref: 'Testament',
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
