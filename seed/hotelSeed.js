//Self contained file for seed data

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const hotelSchema = require("../model/hotels");
const seedData = require("./data/hotelData");

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

const editData = () => {
  seedData.forEach((element) => {
    let bestPrice = Number(element.CostPerNight);
    delete element.CostPerNight;
    element.bestPrice = bestPrice;
    element.price1 = bestPrice + 3;
    element.price2 = bestPrice + 9;
    element.price3 = bestPrice + 7;

    // let amenities = element.Ammenities;

    // if (amenities.includes("Visual alarm clocks")) {
    //   console.log(amenities);
    // } else {
    //   //console.log("false");
    // }
  });
};

const hotelSeed = async () => {
  await hotelSchema.deleteMany({});

  const data = await hotelSchema.find({});
  console.log(data);

  for (let i = 0; i < seedData.length; i++) {
    console.log(i);
    const seedInsert = new hotelSchema({
      accomodations: seedData[i].Accomodations,
      bestPrice: seedData[i].bestPrice,
      ammenities: seedData[i].Ammenities,
      location: seedData[i].Location,
      links: seedData[i].Links,
      price1: seedData[i].price1,
      price2: seedData[i].price2,
      price3: seedData[i].price3,
      distance: Number(seedData[i].Distance),
      hospital: seedData[i].Hospital,
      country: seedData[i].Country

    });

    await seedInsert.save();
  }
};

// editData();
// hotelSeed();

const addCountry = async () => {
  let name;

  for (let i = 0; i < seedData.length; i++) {
    name = seedData[i].Accomodations;
    let mQuery = { accomodations: name };
    //let record = await hotelSchema.find(mQuery);
    //console.log(record);
    let country = seedData[i].Country;

    await hotelSchema.updateMany(mQuery, { country: country });
  }
};

//addCountry();

const addType = async () => {
  let name;

  for (let i = 0; i < seedData.length; i++) {
    name = seedData[i].Accomodations;
    let mQuery = { accomodations: name };

    let type = seedData[i].Type;

    await hotelSchema.updateMany(mQuery, { type: type });
  }
};

//addType();
