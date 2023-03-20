const mongoose = require("mongoose");

const returnFlight = mongoose.Schema;

const returnFlightSchema = new returnFlight({
  airlines: String,
  ammenities: String,
  arrival: String,
  arrivalTime1: String,
  arrivalTime2: String,
  cost: Number,
  departure: String,
  departureTime1: String,
  departureTime2: String,
  duration: String,
});

module.exports = mongoose.model("returnFlight", returnFlightSchema);
