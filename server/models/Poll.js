const mongoose = require('mongoose');

const PollSchema = new mongoose.Schema({
  title: { type: String, unique: true },
  options: { type: Array },
  userId: { type: String }
});

module.exports = mongoose.model('Poll', PollSchema);
