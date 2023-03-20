const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const singleFight = require("../model/singleFlight");
const returnFight = require("../model/returnflight");
const bus = require("../model/bus");

router.get("/commute", (req, res) => {
  const type = req.query.type;
  const arrival = req.query.arrival;
  const departure = req.query.departure;
  const returnTrip = req.query.returnTrip;
  const from = (req.query.from);
  const to = (req.query.to);
  let data;
  let query;

  async function commuteType(comType) {
    switch (comType) {
      case "flight":
        query = { arrival: arrival, departure: departure };
        if (returnTrip == "true") {
          data = await returnFight.find(query);
        } else {
          data = await singleFight.find(query);
        }
        res.send(data);
        break;

      case "bus":
        query = { from: from, to: to };
        data = await bus.find(query);
        res.send(data);
        break;
    }
  }

  commuteType(type);
});

module.exports = router;
