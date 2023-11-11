const express = require("express");
const router = express.Router();
const { Client } = require("@googlemaps/google-maps-services-js");
const client = new Client({});
const { atlasobscura } = require("atlas-obscura-api");
const { default: axios } = require("axios");
require("dotenv").config();
const async = require("async");

//Types of places to return
const types = {
  locality: "City",
  natural_feature: "Nature",
  park: "Nature",
  parks: "Nature",
  art_gallery: "Art & Culture",
  restaurant: "Food & Drink",
  bars: "Food & Drink",
  museum: "Museums",
  museums: "Museums",
  landmark: "Architecture",
  landmark: "Roadside Attraction",
  sculptures: "Roadside Attraction",
  statues: "Roadside Attraction",
  monuments: "Roadside Attraction",
  establishment: "History",
  history: "History",
};

//Categories to search for
const categories = [
  "Nature",
  "Art & Culture",
  "Museums",
  "Architecture",
  "Roadside Attraction",
  "History",
];

//Function to calculate distance between two points
function distance(lat1, lon1, lat2, lon2) {
  const r = 6371; // km
  const p = Math.PI / 180;

  const a =
    0.5 -
    Math.cos((lat2 - lat1) * p) / 2 +
    (Math.cos(lat1 * p) *
      Math.cos(lat2 * p) *
      (1 - Math.cos((lon2 - lon1) * p))) /
      2;

  km = 2 * r * Math.asin(Math.sqrt(a));
  miles = km * 0.621371;

  return miles;
}

//Function to get a random integer between two numbers
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

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
        if (item.rating > 4 && item.user_ratings_total > 500) {
          const type = [];
          item?.types.map((item) => {
            if (types[item] !== undefined) {
              type.push(types[item]);
            }
          });
          place.push({
            place: item?.name,
            rating: item?.rating || 4.5,
            ratingAmount: item?.user_ratings_total,
            desc:
              item.editorial_summary?.overview || "no description available",
            vicinity: item?.vicinity || "USA",
            types: type,
            location: item?.geometry?.location,
            img: item?.photos
              ? {
                  width: item?.photos[0].width,
                  height: item?.photos[0].height,
                  url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${item?.photos[0].photo_reference}&key=${process.env.GLE_API_KEY}`,
                }
              : null,
          });
        }
        if (item.rating > 4 && item.user_ratings_total > 500) {
          const type = [];
          item?.types.map((item) => {
            if (types[item] !== undefined) {
              type.push(types[item]);
            }
          });
          place.push({
            place: item?.name,
            rating: item?.rating || 4.5,
            ratingAmount: item?.user_ratings_total,
            desc:
              item.editorial_summary?.overview || "no description available",
            vicinity: item?.vicinity || "USA",
            types: type,
            location: item?.geometry?.location,
            img: item?.photos
              ? {
                  width: item?.photos[0].width,
                  height: item?.photos[0].height,
                  url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${item?.photos[0].photo_reference}&key=${process.env.GLE_API_KEY}`,
                }
              : null,
          });
        }
      });
    })
    .finally(() => {
      place.sort((a, b) => {
        return b.ratingAmount - a.ratingAmount;
      });

      respos.json({ status: "success", data: place });
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
  placesResponse = {
    status: "success",
    data: [
      {
        place: "Miami",
        rating: 4.5,
        desc: "Miami is a vibrant and diverse coastal city located in southern Florida. Known for its stunning beaches, such as South Beach and Miami Beach, it's a paradise for sun-seekers. The city's unique blend of cultures is evident in its art, music, and culinary scenes, with the colorful neighborhoods of Little Havana and Wynwood offering a taste of this diversity. Miami is also famous for its glamorous nightlife, featuring world-renowned clubs and bars. Whether you're looking to relax on the beach, explore cultural hotspots, or dance the night away, Miami has something for everyone.",
        vicinity: "Miami, Florida",
        types: ["City", "Beach", "Nightlife", "Culture", "Food & Drink"],
        location: {
          lat: 25.7616798,
          lng: -80.1917902,
        },
        img: {
          url: "https://media.istockphoto.com/id/1202852911/photo/miami-downtown-skyline-with-palm-trees-elevated-view.jpg?s=612x612&w=0&k=20&c=J0AQuK3MUkBHqU0x5WpdgugJ6FQ4mgD7FV87kQNCaSg=",
        },
      },
      {
        place: "Mount Rushmore National Memorial",
        rating: 4.7,
        desc: "Mount Rushmore National Memorial is a breathtaking monument located in the Black Hills of South Dakota. Carved into the side of a mountain, it features the enormous faces of four iconic American presidents: George Washington, Thomas Jefferson, Theodore Roosevelt, and Abraham Lincoln. This remarkable sculpture is a symbol of American democracy and leadership. Visitors can explore the Presidential Trail, learn about the history of the monument, and enjoy the stunning natural beauty of the surrounding area. Mount Rushmore is a must-see for those interested in American history and the nation's rich cultural heritage.",
        vicinity: "13000 South Dakota 244, Keystone",
        types: ["Nature", "History"],
        location: {
          lat: 43.88033569999999,
          lng: -103.4537746,
        },
        img: {
          url: "https://lp-cms-production.s3.amazonaws.com/public/2021-08/500pxRF_78397005.jpg",
        },
      },
      {
        place: "Washington",
        rating: 4.5,
        desc: "Washington, D.C., the capital of the United States, is a city steeped in history and political significance. It's home to iconic landmarks such as the White House, the U.S. Capitol, and the Washington Monument. Visitors can explore world-class museums like the Smithsonian, walk along the National Mall to see the Lincoln Memorial and the Vietnam Veterans Memorial, and tour historic sites like the Ford's Theatre. With its rich cultural and educational offerings, Washington, D.C. is a destination that showcases the heart of American democracy and is a must-visit for history enthusiasts and anyone interested in the nation's political heritage.",
        vicinity: "Washington, D.C.",
        types: ["City"],
        location: {
          lat: 38.9071923,
          lng: -77.0368707,
        },
        img: {
          url: "https://images.squarespace-cdn.com/content/555b687ce4b01d104a0a7927/1659533803209-G9M3B70V32YHVUZ6NH45/iStock-505241744.jpg?format=1500w&content-type=image%2Fjpeg",
        },
      },
      {
        place: "Grand Canyon",
        rating: 4.8,
        desc: "The Grand Canyon is one of the most awe-inspiring natural wonders in the world. Located in northern Arizona, this colossal chasm, carved by the Colorado River, offers visitors a breathtaking display of geological history. With its vast, colorful landscapes and dramatic vistas, the Grand Canyon is a paradise for hikers, photographers, and nature enthusiasts. Visitors can explore its numerous trails, including the popular South Rim and North Rim, or take a helicopter tour for a bird's-eye view. Whether you're marveling at the sunrise or gazing into the depths of this remarkable canyon, the Grand Canyon is a bucket-list destination for those seeking an unforgettable encounter with the natural beauty of the American Southwest.",
        vicinity: "Arizona",
        types: ["Nature"],
        location: {
          lat: 36.09976309999999,
          lng: -112.1124846,
        },
        img: {
          url: "https://www.foxintheforest.net/wp-content/uploads/2020/04/iStock-104144229.jpg",
        },
      },
      {
        place: "Las Vegas",
        rating: 4.5,
        desc: 'Las Vegas, often referred to as the "Entertainment Capital of the World", is a vibrant and dazzling city located in the Mojave Desert of Nevada. Known for its world-class casinos, luxurious resorts, and vibrant nightlife, Las Vegas offers an unforgettable experience for visitors. The famous Las Vegas Strip is lined with iconic hotels and resorts, hosting spectacular shows and entertainment, making it a hub of excitement and glamour. Beyond the gaming, the city boasts a diverse culinary scene, high-end shopping, and a range of attractions, including the High Roller observation wheel and the neon-lit Fremont Street Experience. Las Vegas is a city where you can indulge in entertainment, dining, and relaxation, making it an ideal destination for those seeking excitement and luxury.',
        vicinity: "Las Vegas, Nevada",
        types: ["City"],
        location: {
          lat: 36.171563,
          lng: -115.1391009,
        },
        img: {
          url: "https://www.wealthmanagement.com/sites/wealthmanagement.com/files/las-vegas-casino-revenue.jpg",
        },
      },
      {
        place: "Yellowstone National Park",
        rating: 4.8,
        desc: "Yellowstone National Park, located primarily in the U.S. states of Wyoming, Montana, and Idaho, is a natural wonderland and the world's first national park. It's celebrated for its extraordinary geothermal features, including the iconic Old Faithful geyser, which erupts with clockwork precision. The park boasts an array of diverse ecosystems, from lush forests and alpine meadows to pristine lakes and rushing waterfalls.",
        vicinity: "Wyoming",
        types: ["Nature"],
        location: {
          lat: 44.427963,
          lng: -110.588455,
        },
        img: {
          url: "https://cdn.mos.cms.futurecdn.net/BGU5uU9RcR2YYhrLdMi5sN.jpg",
        },
      },
      {
        place: "Yosemite National Park",
        rating: 4.8,
        desc: "Yosemite National Park, situated in the Sierra Nevada mountains of California, is a breathtaking expanse of natural beauty. Renowned for its towering granite cliffs, including the iconic El Capitan and Half Dome, Yosemite offers a haven for outdoor enthusiasts and nature lovers. The park's stunning landscapes feature cascading waterfalls, such as Yosemite Falls and Bridalveil Fall, pristine meadows, and dense forests. Hikers can explore a multitude of trails, from gentle walks to challenging backcountry routes, while rock climbers are drawn to the world-class climbing opportunities. The Merced River winds through the valley, offering excellent opportunities for fishing and picnicking.",
        vicinity: "California",
        types: ["Nature"],
        location: {
          lat: 37.8651011,
          lng: -119.5383294,
        },
        img: {
          url: "https://cdn.aarp.net/content/dam/aarp/travel/destinations/2020/09/1140-yosemite-hero.jpg",
        },
      },
      {
        place: "New York City",
        rating: 4.5,
        desc: "New York City, often referred to simply as \"New York\", is an iconic metropolis and one of the world's most exciting destinations. Located in the northeastern United States, it's a dynamic hub of culture, commerce, and creativity. New York City is renowned for its famous landmarks, such as the Statue of Liberty, Times Square, Central Park, and the Empire State Building. The city's vibrant neighborhoods, from the historic charm of Greenwich Village to the bustling streets of Manhattan, offer a diverse range of experiences. It's a cultural mecca with world-class museums, theaters, and restaurants.",
        vicinity: "New York City, New York",
        types: ["City"],
        location: {
          lat: 40.7127753,
          lng: -74.0059728,
        },
        img: {
          url: "https://media.istockphoto.com/id/1406960186/photo/the-skyline-of-new-york-city-united-states.jpg?s=612x612&w=0&k=20&c=yZJXNdzq3d5bKgvVzPBahBujpbVUXFyjyl9FN9L7esM=",
        },
      },
      {
        place: "San Francisco",
        rating: 4.5,
        desc: "San Francisco, located in northern California, is a city of great charm and diversity. It's known for its iconic landmarks, including the Golden Gate Bridge, Alcatraz Island, and the steep, winding streets of Lombard Street.San Francisco is a cultural and culinary hotspot with a rich history. The city's neighborhoods each have their own unique character, from the artistic community of the Mission District to the historic architecture of Alamo Square. The city's strong connection to the tech industry has also made it a global center for innovation.",
        vicinity: "San Francisco, California",
        types: ["City"],
        location: {
          lat: 37.7749295,
          lng: -122.4194155,
        },
        img: {
          url: "https://media.istockphoto.com/id/476881195/photo/bay-bridge-and-san-francisco-skyline-at-sunset.jpg?s=612x612&w=0&k=20&c=dBeGdmYS8eOufXGT_YdRkuvKfLKUHFYwVaL9gHbkSXo=",
        },
      },
      {
        place: "Niagara Falls",
        rating: 4.5,
        desc: "Niagara Falls is a breathtaking natural wonder located on the border between the United States and Canada. It is a collection of three majestic waterfalls: Horseshoe Falls, American Falls, and Bridal Veil Falls. The falls are known for their awe-inspiring beauty, with millions of gallons of water cascading over the edge into the Niagara River below. Visitors to Niagara Falls can experience the falls from a variety of perspectives. Boat tours, such as the Maid of the Mist in the U.S. and Hornblower in Canada, offer an up-close and exhilarating view of the falls. The surrounding parks, including Niagara Falls State Park in the U.S. and Queen Victoria Park in Canada, provide ample opportunities for hiking, picnicking, and enjoying the stunning views.",
        vicinity: "Niagara Falls, New York",
        types: ["City"],
        location: {
          lat: 43.0962143,
          lng: -79.0377388,
        },
        img: {
          url: "https://overthefallstoursniagara.com/wp-content/uploads/2023/04/Things-to-do-in-Niagara-Falls.jpg",
        },
      },
    ],
  };

  respos.json(placesResponse);

  // places.map((item, i, arr) => {
  //   client
  //     .placeDetails({
  //       params: {
  //         place_id: item,
  //         fields: [
  //           "name",
  //           "editorial_summary",
  //           "rating",
  //           "vicinity",
  //           "photo",
  //           "type",
  //           "geometry",
  //         ],
  //         key: process.env.GLE_API_KEY,
  //       },
  //     })
  //     .then((res) => {
  //       if (!res.data.result.editorial_summary?.overview) {
  //         const placename =
  //           res.data.result?.name === "New York"
  //             ? "New York City"
  //             : res.data.result?.name === "Washington"
  //             ? "Washington (state)"
  //             : res.data.result?.name;
  //         axios
  //           .get(
  //             `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&formatversion=2&explaintext=1&exintro=1&exsentences=5&exsectionformat=wiki&titles=${placename}&origin=*`
  //           )
  //           .then((resp) => {
  //             placesResponse.push({
  //               place: res.data.result?.name,
  //               rating: res.data.result?.rating || 4.5,
  //               desc: resp.data.query.pages[0].extract,
  //               vicinity: res.data.result?.vicinity || "USA",
  //               types: res.data.result?.types,
  //               location: res.data.result?.geometry?.location,
  //               img: res.data.result?.photos
  //                 ? {
  //                     width: res.data.result?.photos[0].width,
  //                     height: res.data.result?.photos[0].height,
  //                     url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${res.data.result?.photos[1].photo_reference}&key=${process.env.GLE_API_KEY}`,
  //                   }
  //                 : null,
  //             });
  //             if (placesResponse.length == arr.length) {
  //               console.log(placesResponse);
  //               respos.json({ status: "success", data: placesResponse });
  //             }
  //           })
  //           .catch((err) => {
  //             console.log(err);
  //           });
  //       } else {
  //         placesResponse.push({
  //           place: res.data.result?.name,
  //           rating: res.data.result?.rating || 4.5,
  //           desc: res.data.result.editorial_summary?.overview,
  //           vicinity: res.data.result?.vicinity || "USA",
  //           types: res.data.result?.types,
  //           location: res.data.result?.geometry?.location,
  //           img: {
  //             width: res.data.result?.photos[0].width,
  //             height: res.data.result?.photos[0].height,
  //             url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${res.data.result?.photos[1].photo_reference}&key=${process.env.GLE_API_KEY}`,
  //           },
  //         });

  //         if (placesResponse.length == arr.length) {
  //           console.log(placesResponse);
  //           respos.json({ status: "success", data: placesResponse });
  //         }
  //       }
  //     })
  //     .catch((err) => {
  //       placesResponse.push({ error: "Location Cannot be Display" });
  //       console.log("second call");
  //       console.log(err);
  //     });
  // });
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
        const type = [];
        item?.types.map((item) => {
          if (types[item] !== undefined) {
            type.push(types[item]);
          }
        });

        placesResponse.push({
          place: item.name,
          rating: item?.rating || 4.5,
          desc: item.editorial_summary?.overview || "no description available",
          vicinity: item?.vicinity || "USA",
          types: type,
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
      });
    })
    .finally(() => {
      respos.json({ status: "success", data: placesResponse });
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

router.get("/recommended", recommendedLogger, (req, respos) => {
  const places = [];

  atlasobscura
    .search({ lat: req.query.latitude, lng: req.query.longitude })
    .then((data) => {
      data.results.map((item, i, arr) => {
        atlasobscura.placeFull(item.id).then((res) => {
          const type = [];

          res.tags.map((item) => {
            // console.log(item.title);
            if (types[item.title] !== undefined) {
              type.push(types[item.title]);
            }
          });

          places.push({
            place: res.title,
            rating: res?.rating || 4.5,
            desc: res?.subtitle || "no description available",
            vicinity: res?.location || "USA",
            types: type,
            location: res?.coordinates,
            img: { url: res?.thumbnail_url },
            place_id: res.id,
          });

          if (places.length == arr.length) {
            // console.log(places);
            respos.json({ status: "success", data: places });
          }
        });
      });
    })
    .catch((err) => {
      respos.json({ status: "failed", message: err });
    });
});

router.get("/plan", (req, respos) => {
  const points = [];
  axios
    .get(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${req.query.originLongitude}%2C${req.query.originLatitude}%3B${req.query.destLongitude}%2C${req.query.destLatitude}?alternatives=false&geometries=geojson&language=en&overview=full&steps=true&access_token=${process.env.MPBOX_Public_Key}`
    )
    .then((res) => {
      // Get all the Guevos from the route
      points.push([
        res.data.routes[0].geometry.coordinates[0][1],
        res.data.routes[0].geometry.coordinates[0][0],
      ]);
      res.data.routes[0].geometry.coordinates.forEach((point) => {
        const dist = distance(
          points[points.length - 1][0],
          points[points.length - 1][1],
          point[1],
          point[0]
        );
        if (dist > 65) {
          points.push([point[1], point[0]]);
        }
      });

      //Send the points to the plan function
      req.params.points = points;
      //Converts meters to miles
      miles = res.data.routes[0].distance * 0.000621371;

      //Checks which plan to use according to the distance
      if (miles < 1500) {
        plan1(req, respos);
      } else {
        plan2(req, respos);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

function locationLogger(req, res, next) {
  if (req.query.latitude && req.query.longitude && req.query.filter) {
    console.log("Logging location: ", req.query.latitude, req.query.longitude);
    next();
  } else {
    console.log("No location or filter provided.");
    res.json({
      status: "failed",
      message: "No location or filter provided.",
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

function recommendedLogger(req, res, next) {
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

function plan1(req, respos) {
  const points = req.params.points;
  const place = [];

  //Iterate through each guevo and find places
  async.eachSeries(
    points,
    (point, next) => {
      place.push({ guevo: point, places: [] });
      client
        .placesNearby({
          params: {
            keyword: categories[getRndInteger(0, categories.length)],
            location: `${point[0]},${point[1]}`,
            radius: 50000,
            key: process.env.GLE_API_KEY,
            type: "tourist_attraction",
          },
        })
        .then((res) => {
          res.data.results.forEach((item, i, arr) => {
            if (item.rating > 4 && item.user_ratings_total > 500) {
              const type = [];
              item?.types.forEach((item) => {
                if (types[item] !== undefined) {
                  type.push(types[item]);
                }
              });
              place[place.length - 1].places.push({
                place: item?.name,
                rating: item?.rating || 0,
                ratingAmount: item?.user_ratings_total || 0,
                desc:
                  item.editorial_summary?.overview ||
                  "no description available",
                vicinity: item?.vicinity || "USA",
                types: type,
                location: item?.geometry?.location,
                img: item?.photos
                  ? {
                      width: item?.photos[0].width,
                      height: item?.photos[0].height,
                      url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${item?.photos[0].photo_reference}&key=${process.env.GLE_API_KEY}`,
                    }
                  : null,
              });
            }
          });
        })
        .finally(() => {
          place[place.length - 1].places.sort((a, b) => {
            return b.ratingAmount - a.ratingAmount;
          });
          next();
        });
    },
    () => {
      respos.json({ status: "success", data: place });
    }
  );
}

function plan2(req, respos) {
  //Receive Points
  const points = req.params.points;
  const place = [];

  //Find how many chunks to split the route and how many guevos per chunk
  const chunks = Math.floor(Math.sqrt(points.length));
  const chunkSize = Math.floor(points.length / chunks);

  //Split the route into chunks
  const chunkedPoints = [];
  for (let i = 0; i < chunks; i++) {
    chunkedPoints.push({
      chunk: i + 1,
      data: points.slice(i * chunkSize, (i + 1) * chunkSize),
    });
  }

  //Find the guevos to use for each chunk
  const guevos = chunkedPoints.map((item, i, arr) => {
    return {
      chunk: item.chunk,
      places: [
        item.data[0],
        item.data[Math.floor(item.data.length / 2)],
        item.data[item.data.length - 1],
      ],
    };
  });

  //Iterate through each chunk
  async.eachSeries(
    guevos,
    (guevo, next) => {
      place.push({ chunk: guevo.chunk, places: [] });

      //Iterate through each guevo in the chunk and find places
      async.eachSeries(
        guevo.places,
        (point, next) => {
          place[place.length - 1].places.push({
            guevo: point,
            guevoPlaces: [],
          });
          client
            .placesNearby({
              params: {
                keyword: categories[getRndInteger(0, categories.length)],
                location: `${point[0]},${point[1]}`,
                radius: 50000,
                key: process.env.GLE_API_KEY,
                type: "tourist_attraction",
              },
            })
            .then((res) => {
              res.data.results.forEach((item, i, arr) => {
                if (item.rating > 4 && item.user_ratings_total > 500) {
                  const type = [];
                  item?.types.forEach((item) => {
                    if (types[item] !== undefined) {
                      type.push(types[item]);
                    }
                  });
                  place[place.length - 1].places[
                    place[place.length - 1].places.length - 1
                  ].guevoPlaces.push({
                    place: item?.name,
                    rating: item?.rating || 0,
                    ratingAmount: item?.user_ratings_total || 0,
                    desc:
                      item.editorial_summary?.overview ||
                      "no description available",
                    vicinity: item?.vicinity || "USA",
                    types: type,
                    location: item?.geometry?.location,
                    img: item?.photos
                      ? {
                          width: item?.photos[0].width,
                          height: item?.photos[0].height,
                          url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${item?.photos[0].photo_reference}&key=${process.env.GLE_API_KEY}`,
                        }
                      : null,
                  });
                }
              });
            })
            .finally(() => {
              place[place.length - 1].places[
                place[place.length - 1].places.length - 1
              ].guevoPlaces.sort((a, b) => {
                return b.ratingAmount - a.ratingAmount;
              });
              next();
            });
        },
        next
      );
    },
    () => {
      respos.json({ status: "success", data: place });
    }
  );
}

module.exports = router;
