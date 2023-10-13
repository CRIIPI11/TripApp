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
        keyword: req.query.filter,
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
              img: res.data.result?.photos
                ? {
                    width: res.data.result?.photos[0].width,
                    height: res.data.result?.photos[0].height,
                    url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${res.data.result?.photos[0].photo_reference}&key=${process.env.GLE_API_KEY}`,
                  }
                : null,
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

router.get("/popular", (req, respos) => {
  places = [
    "ChIJEcHIDqKw2YgRZU-t3XHylv8",
    "ChIJOwg_06VPwokRYv534QaPC8g",
    "ChIJIQBpAG2ahYAR_6128GcTUEo",
    "ChIJ0X31pIK3voARo3mz1ebVzDo",
    "ChIJW-T2Wt7Gt4kRKl2I1CJFUsI",
    "ChIJxeyK9Z3wloAR_gOA7SycJC0",
    "ChIJ39Y-tdg1fYcRQcZcBb499do",
    "ChIJVVVVVVXlUVMRu-GPNDD5qKw",
    "ChIJtzPmKepj04kRs6rFueRal2E",
    "ChIJjeAnvVQGzIARjS7UQkRVwrE",
  ];
  placesResponse = [];

  places.map((item, i, arr) => {
    client
      .placeDetails({
        params: {
          place_id: item,
          fields: [
            "name",
            "editorial_summary",
            "rating",
            "vicinity",
            "photo",
            "type",
            "geometry",
          ],
          key: process.env.GLE_API_KEY,
        },
      })
      .then((res) => {
        if (!res.data.result.editorial_summary?.overview) {
          const placename =
            res.data.result?.name === "New York"
              ? "New York City"
              : res.data.result?.name === "Washington"
              ? "Washington (state)"
              : res.data.result?.name;
          axios
            .get(
              `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&formatversion=2&explaintext=1&exintro=1&exsentences=5&exsectionformat=wiki&titles=${placename}&origin=*`
            )
            .then((resp) => {
              placesResponse.push({
                place: res.data.result?.name,
                rating: res.data.result?.rating || 4.5,
                desc: resp.data.query.pages[0].extract,
                vicinity: res.data.result?.vicinity || "USA",
                types: res.data.result?.types,
                location: res.data.result?.geometry?.location,
                img: res.data.result?.photos
                  ? {
                      width: res.data.result?.photos[0].width,
                      height: res.data.result?.photos[0].height,
                      url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${res.data.result?.photos[1].photo_reference}&key=${process.env.GLE_API_KEY}`,
                    }
                  : null,
              });
              if (placesResponse.length == arr.length) {
                console.log(placesResponse);
                respos.json({ status: "success", data: placesResponse });
              }
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          placesResponse.push({
            place: res.data.result?.name,
            rating: res.data.result?.rating || 4.5,
            desc: res.data.result.editorial_summary?.overview,
            vicinity: res.data.result?.vicinity || "USA",
            types: res.data.result?.types,
            location: res.data.result?.geometry?.location,
            img: {
              width: res.data.result?.photos[0].width,
              height: res.data.result?.photos[0].height,
              url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${res.data.result?.photos[1].photo_reference}&key=${process.env.GLE_API_KEY}`,
            },
          });

          if (placesResponse.length == arr.length) {
            console.log(placesResponse);
            respos.json({ status: "success", data: placesResponse });
          }
        }
      })
      .catch((err) => {
        placesResponse.push({ error: "Location Cannot be Display" });
        console.log("second call");
        console.log(err);
      });
  });
});

router.get("/search", searchLogger, (req, respos) => {
  placesResponse = [];

  client
    .textSearch({
      params: {
        query: req.query.text,
        // type: req.query.local === "city" ? "locality" : "tourist_attraction",
        radius: 50000,
        key: process.env.GLE_API_KEY,
      },
    })
    .then((res) => {
      res.data.results.map((item, i, arr) => {
        placesResponse.push({
          place: item.name,
          rating: item?.rating || 4.5,
          desc: item.editorial_summary?.overview || "no description available",
          vicinity: item?.vicinity || "USA",
          types: item?.types,
          location: item?.geometry?.location,
          img: item.photos
            ? {
                width: item?.photos[0]?.width,
                height: item?.photos[0]?.height,
                url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${item?.photos[0]?.photo_reference}&key=${process.env.GLE_API_KEY}`,
              }
            : null,
          place_id: item.place_id,
        });

        if (placesResponse.length == arr.length) {
          console.log(placesResponse);
          respos.json({ status: "success", data: placesResponse });
        }
      });
    })
    .catch((err) => {
      placesResponse.push({ error: "Location Cannot be Display" });
      console.log("second call");
      console.log(err);
    });
});

router.get("/details", detailsLogger, (req, respos) => {
  client
    .placeDetails({
      params: {
        place_id: req.query.place_id,
        fields: [
          "name",
          "editorial_summary",
          "rating",
          "vicinity",
          "photo",
          "type",
          "geometry",
        ],
        key: process.env.GLE_API_KEY,
      },
    })
    .then((res) => {
      respos.json({
        place: res.data.result?.name,
        rating: res.data.result?.rating || 4.5,
        desc: res.data.result.editorial_summary?.overview,
        vicinity: res.data.result?.vicinity || "USA",
        types: res.data.result?.types,
        location: res.data.result?.geometry?.location,
        img: res.data.result?.photos
          ? {
              width: res.data.result?.photos[0].width,
              height: res.data.result?.photos[0].height,
              url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${res.data.result?.photos[1].photo_reference}&key=${process.env.GLE_API_KEY}`,
            }
          : null,
      });
    })
    .catch((err) => {
      console.log("second call");
      console.log(err);
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

function searchLogger(req, res, next) {
  if (
    req.query.text
    // && (req.query.local === "city" || req.query.local === "place")
  ) {
    console.log("Logging search: ", req.query.text);
    next();
  } else {
    console.log("No text provided.");
    res.json({
      status: "failed",
      message: "No text provided.",
    });
  }
}

function detailsLogger(req, res, next) {
  if (req.query.place_id) {
    console.log("Logging search: ", req.query.place_id);
    next();
  } else {
    console.log("No place id provided.");
    res.json({
      status: "failed",
      message: "No place id provided.",
    });
  }
}

module.exports = router;
