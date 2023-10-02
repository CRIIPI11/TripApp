const express = require("express");
const app = express();
const port = 3000;
const Parse = require("parse/node");

Parse.initialize("", "");
Parse.serverURL = "https://parseapi.back4app.com/";

const User = new Parse.Object("UserTest");
const userQuery = new Parse.Query("UserTest");

app.get("/:id", (req, res) => {
  User.set("Username", `${req.params.id}`);
  User.set("Password", "testing");
  User.set("Email", "testing@em");

  const save = User.save();

  save.then(
    (user) => {
      res.json(user);
    },
    (error) => {
      res.json(error);
    }
  );

  //   userQuery
  //     .get("znjy9Mevku")
  //     .then((user) => {
  //       res.json(user.get("Password"));
  //     })
  //     .catch((err) => {
  //       res.json(err);
  //     });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
