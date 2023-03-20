const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bannedMedicines = require("../seed/Banned Medicines");

router.get("/medicine", (req, res) => {
  res.send(bannedMedicines);
});

module.exports = router;
