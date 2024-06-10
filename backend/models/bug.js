const mongoose = require('mongoose');

const bugSchema = new mongoose.Schema({
  title: String,
  content: String,
  priority: String,
  reportedBy: String,
  date: Date,
  status: { type: String, default: 'Open' },
});

module.exports = mongoose.model('Bug', bugSchema);
