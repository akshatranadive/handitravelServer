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
  const queryAmenities = req.query.amenities;
  let data = [];

  const finalData = [];

  const mongoQuery = {
    arrival: arrival,
    departure: departure,
    cost: { $lte: budget },
  };

  const rQuery = {
    arrival: departure,
    departure: arrival,
    cost: { $lte: budget },
  };

  if (returnTrip == "true") {
    let result = await returnFight.find(mongoQuery);
    data.push(result);

    result = await returnFight.find(rQuery);
    data.push(result);
  } else {
    let result = await singleFight.find(mongoQuery);
    data.push(result);
  }

  // console.log(data);

  data.forEach((element) => {
    element.forEach((obj) => {
      let match = 0;
      queryAmenities.forEach((amenity) => {
        if (obj.ammenities.includes(amenity)) {
          match++;
        }
      });

      if (match == queryAmenities.length) {
        finalData.push(obj);
      }
      // finalData.push(obj);
    });
  });

  res.send(finalData);
});

module.exports = router;
