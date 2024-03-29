require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

const userRouter = require("./routes/user");
const placesRouter = require("./routes/places");
const tripsRouter = require("./routes/trips");

app.use("/Users", userRouter);

app.use("/places", placesRouter);

app.use("/Trips", tripsRouter);

app.listen(1337, function () {
  console.log("Express server running on port 1337.");
});
