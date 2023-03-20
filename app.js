console.log("HandiTravel Server....");

const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();


const url =
process.env.MONGODB_URI;

console.log(url);
mongoose.set("strictQuery", true);

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  //res.setHeader("Access-Control-Allow-Headers");
  next();
});

app.use(require("./router/hotels"));
//app.use(require("./router/commute"));
app.use(require("./router/flights"));
app.use(require("./router/buses"));
app.use(require("./router/bannedMedicines"));

app.listen(process.env.PORT, () => {
  console.log("Port 2023");
});
  