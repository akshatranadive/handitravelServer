const mongoose = require('mongoose');

const flight  = mongoose.Schema;


const flightSchema = new flight({


    airlines: String,
    ammenities: String,
    arrival: String,
    arrivalTime: String,
    cost: Number,
    departure: String,
    departureTime: String,
    duration: String,



})

module.exports = mongoose.model('singleFight',flightSchema);