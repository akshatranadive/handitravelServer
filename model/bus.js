const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const busSchema = new Schema({
  amenities: String,
  cost: Number,
  duration: String,
  from: String,
  to: String,
});


module.exports = mongoose.model('bus',busSchema);
