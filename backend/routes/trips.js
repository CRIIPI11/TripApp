const express = require("express");
const AsyncStorage = require("@react-native-async-storage/async-storage");
const Parse = require("parse/node");
const router = express.Router();

require("dotenv").config();

// Initialize Parse SDK with Back4App's credentials
Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(process.env.B4A_APPLICATION_ID, process.env.B4A_JAVASCRIPT_ID);
Parse.serverURL = "https://parseapi.back4app.com/";

Parse.User.enableUnsafeCurrentUser();

//endpoint to create new trip in database
router.post("/create", (req, res) => {
  const trip = new Parse.Object("Trips");
  const user = Parse.User.current();

  trip.set("User", user);
  trip.set("tripName", req.body.tripName);
  trip.set("Destination", JSON.parse(req.body.destination)); //an object that contains lat and lng
  trip.set("stopCount", req.body.stopCount);
  trip.set("stops", req.body.stops);
  trip.set("categories", JSON.parse(req.body.categories));

  trip
    .save()
    .then((obj) => {
      res.json({
        result: "success",
        trip: trip.toJSON(),
      });
    })
    .catch((error) => {
      console.log(error);
      res.json({
        result: "failure",
        message: error,
      });
    });
});

//endpoint to get all user trips from database
router.get("/getTrip", (req, res) => {
  const query = new Parse.Query("Trips");
  const user = Parse.User.current();

  query.equalTo("User", user);
  query.find().then((results) => {
    res.json({
      result: "success",
      trips: results.map((trip) => trip.toJSON()),
    });
  });
});

//endpoint to get a specific trip from the database
router.get("/getTrip/:tripId", (req, res) => {
  const query = new Parse.Query("Trips");
  const user = Parse.User.current();

  query.equalTo("User", user);
  query.equalTo("objectId", req.params.tripId);

  query.first().then((trip) => {
    if (trip) {
      res.json({
        result: "success",
        trip: trip.toJSON(),
      });
    } else {
      res.json({
        result: "failure",
        message: "Trip not found",
      });
    }
  });
});

//endpoint to edit stops from the database

router.put("/update/stops", (req, res) => {
  const user = Parse.User.current();
  const query = new Parse.Query("Trips");

  query.equalTo("User", user);
  query.equalTo("objectId", req.body.tripId);

  query
    .first()
    .then((trip) => {
      if (trip) {
        trip.set("stops", req.body.stops);

        trip
          .save()
          .then((updatedTrip) => {
            res.json({
              result: "success",
              trip: updatedTrip.toJSON(),
            });
          })
          .catch((error) => {
            console.log(error);
            res.json({
              result: "failure",
              message: error,
            });
          });
      } else {
        res.json({
          result: "failure",
          message: "Trip not found",
        });
      }
    })
    .catch((error) => {
      console.log(error);
      res.json({
        result: "failure",
        message: error,
      });
    });
});

module.exports = router;
