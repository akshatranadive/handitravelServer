const express = require("express");
const app = express();
const mongoose = require("mongoose");
const flightSchema = require("../model/singleFlight");
const singleFight = require("./singleFlights");
const returnFlight = require("./returnFlights");
const returnFlightSchema = require("../model/returnflight");

const URL =
  "mongodb+srv://sharm591:Rankin%402023@cluster0.sbczo2p.mongodb.net/?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(URL)
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const singleData = async () => {
  await flightSchema.deleteMany({});
  singleFight.forEach(async (element) => {
    const sendData = new flightSchema({
      airlines: element.airlines,
      ammenities: element.ammenities,
      arrival: element.arrival,
      arrivalTime: element.arrivalTime,
      cost: element.cost,
      departure: element.departure,
      departureTime: element.departureTime,
      duration: element.duration,
    });

    await sendData
      .save()
      .then(() => {
        console.log("Done");
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

//singleData();

const returnData = async () => {
  returnFlight.forEach(async (element) => {
    const sendData = new returnFlightSchema({
      airlines: element.airlines,
      ammenities: element.ammenities,
      arrival: element.arrival,
      arrivalTime1: element.arrivalTime1,
      arrivalTime2: element.arrivalTime2,
      cost: element.cost,
      departure: element.departure,
      departureTime1: element.departureTime1,
      departureTime2: element.departureTime2,
      duration: element.duration,
    });

    await sendData
      .save()
      .then(() => {
        console.log("Done");
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
//returnData();
