const express = require("express");
const app = express();
const mongoose = require("mongoose");
const busSchema = require("../model/bus");
const busData = require("./data/busData");

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

const bus = async () => {
  await busSchema.deleteMany({});

  busData.forEach(async (element) => {
    const sendData = new busSchema({
      amenities: element.amenities,
      cost: Number(element.cost),
      duration: element.duration,
      from: element.from,
      to: element.to,
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

// bus();
