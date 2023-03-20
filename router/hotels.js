const express = require("express");
// const hotel = require("../../../HandiTravel/models/hotel");
const router = express.Router();
const hotelModel = require("../model/hotels");

router.get("/hotel", async (req, res) => {
  //const q = req.query;
  const location = req.query.location;
  const budget = Number(req.query.budget);
  const queryAmenities = req.query.disability;

  //regex finds if the subString in the String 
  const mongoQuery = {
    location: { $regex: location },
    bestPrice: { $lte: budget },
  };

  const hotelData = await hotelModel.find(mongoQuery);
  console.log(hotelData);
  const finalData = [];

  hotelData.forEach((element) => {
    let match = 0;
    queryAmenities.forEach((amenity) => {
      if (element.amenities.includes(amenity)) {
        match++;
      }
    });

    if (match == queryAmenities.length) {
      finalData.push(element);
    }
  });
  //console.log(finalData);
  res.send(finalData);
});

module.exports = router;
