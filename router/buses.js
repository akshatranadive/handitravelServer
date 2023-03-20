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
  let data;
  const mongoQuery = {
    cost: { $lte: budget },
    from: from,
    to: to,
  };

  data = await bus.find(mongoQuery);
  res.send(data);
});

module.exports = router;
