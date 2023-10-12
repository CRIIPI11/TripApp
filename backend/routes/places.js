const express = require("express");
const router = express.Router();
const { Client } = require("@googlemaps/google-maps-services-js");
const client = new Client({});
require("dotenv").config();
const axios = require("axios");

router.get("/", (req, respos) => {
  respos.json({
    status: "success",
    message: `Hello from the places router!`,
  });
});

router.get("/location", locationLogger, (req, respos) => {
  const place = [];
  client
    .placesNearby({
      params: {
        keyword: `${req.query.filter} || `,
        location: `${req.query.latitude},${req.query.longitude}`,
        radius: 50000,
        key: process.env.GLE_API_KEY,
        type: "tourist_attraction",
      },
    })
    .then((res) => {
      res.data.results.map((item, i, arr) => {
        client
          .placeDetails({
            params: {
              place_id: item.place_id,
              fields: [
                "name",
                "editorial_summary",
                "rating",
                "vicinity",
                "photo",
                "type",
              ],
              key: process.env.GLE_API_KEY,
            },
          })
          .then((res) => {
            place.push({
              place: res.data.result?.name,
              rating: res.data.result?.rating,
              desc:
                res.data.result.editorial_summary?.overview ||
                "no description available",
              vicinity: res.data.result?.vicinity,
              types: res.data.result?.types,
              location: res.data.result?.geometry?.location,
              img: {
                width: res.data.result?.photos[0].width,
                height: res.data.result?.photos[0].height,
                url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${res.data.result?.photos[0].photo_reference}&key=${process.env.GLE_API_KEY}`,
              },
            });

            if (place.length == arr.length) {
              console.log(place);
              respos.json({ status: "success", data: place });
            }
          })
          .catch((err) => {
            place.push({ error: "Location Cannot be Display" });
            console.log("second call");
            console.log(err);
          });
      });
    })
    .catch((err) => {
      console.log(err);
      respos.json({
        status: "failed",
        message: err,
      });
    });
});

function locationLogger(req, res, next) {
  if (req.query.latitude && req.query.longitude) {
    console.log("Logging location: ", req.query.latitude, req.query.longitude);
    next();
  } else {
    console.log("No location provided.");
    res.json({
      status: "failed",
      message: "No location provided.",
    });
  }
}

module.exports = router;
