console.log("HandiTravel Server....");

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const url =
  "mongodb+srv://sharm591:Rankin%402023@cluster0.sbczo2p.mongodb.net/?retryWrites=true&w=majority";

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

app.listen(2023, () => {
  console.log("Port 2023");
});
  