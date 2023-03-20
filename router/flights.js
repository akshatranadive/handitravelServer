const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const singleFight = require("../model/singleFlight");
const returnFight = require("../model/returnflight");
const bus = require("../model/bus");
const { slice } = require("../seed/Banned Medicines");

router.get("/flights", async (req, res) => {
  const type = req.query.type;
  const arrival =
    req.query.arrival.charAt(0).toUpperCase() + req.query.arrival.slice(1);

  const departure =
    req.query.departure.charAt(0).toUpperCase() + req.query.departure.slice(1);
  const returnTrip = req.query.returnTrip;
  const from = req.query.from;
  const to = req.query.to;
  const budget = Number(req.query.budget);
  let data;

  const mongoQuery = {
    arrival: arrival,
    departure: departure,
    cost: { $lte: budget },
  };
  console.log(mongoQuery);
  if (returnTrip == "true") {
    data = await returnFight.find(mongoQuery);
    console.log("Return " + data);
  } else {
    data = await singleFight.find(mongoQuery);
    console.log("Single " + data);
  }

  res.send(data);
});

module.exports = router;
