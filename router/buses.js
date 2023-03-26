const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const singleFight = require("../model/singleFlight");
const returnFight = require("../model/returnflight");
const bus = require("../model/bus");

router.get("/buses", async (req, res) => {
  // const arrival = req.query.arrival;
  // const departure = req.query.departure;
  const from = req.query.from.charAt(0).toUpperCase() + req.query.from.slice(1);
  const to = req.query.to.charAt(0).toUpperCase() + req.query.to.slice(1);
  const budget = req.query.budget;
  const queryAmenities = req.query.amenities;
  let data;
  const mongoQuery = {
    cost: { $lte: budget },
    from: from,
    to: to,
  };
  const finalData = [];
  data = await bus.find(mongoQuery);
  finalData.push(data);


  // data.forEach((obj) => {
  //   let match = 0;
  //   queryAmenities.forEach((amenity) => {
  //     if (obj.amenities.includes(amenity)) {
  //       match++;
  //     }
  //   });

  //   if (match == queryAmenities.length) {
  //     finalData.push(obj);
  //   }
  // });

  // res.send(finalData);
});

module.exports = router;
