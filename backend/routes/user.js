const express = require("express");
const AsyncStorage = require("@react-native-async-storage/async-storage");
const Parse = require("parse/node");
const router = express.Router();
//create end

require("dotenv").config();

// Initialize Parse SDK with Back4App's credentials
Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(process.env.B4A_APPLICATION_ID, process.env.B4A_JAVASCRIPT_ID);
Parse.serverURL = "https://parseapi.back4app.com/";

Parse.User.enableUnsafeCurrentUser();

router.post("/signup", (req, res) => {
  const user = new Parse.User();

  console.log(req.body);
  
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const email = req.body.email;
  if(!emailRegex.test(email)){
      return res.json({
          result: "failure",
          message: "Invalid email format",
        });
    }
    
  user.set("username", email);
  user.set("email", email);
  user.set("password", req.body.password);
  user.set("name", req.body.name);

  user
    .signUp()
    .then((obj) => {
      res.json({ 
        result: "success", 
        user: user.toJSON() 
      });
    })
    .catch((error) => {
      console.log(error);
      res.json({
        result: "failure",
        message: error
      });
    });
});

//add something to verify the email

router.post("/login", (req, res) => {

  //add a check to see if email is verified. 
  const password = req.body.password;

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const email = req.body.email;
    if(!emailRegex.test(email)){
        return res.json({
            result: "failure",
            message: "Invalid email format",
        });
    }

  Parse.User.logIn(email, password)
    .then((obj) => {
      res.json({
        result: "success",
        user: obj.toJSON(),
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

router.post("/logout", (req, res) => {
  Parse.User.logOut(currentUser)
    .then(() => {
      res.send("User logged out successfully");
    })
    .catch((error) => {
      console.error("Error logging out user", error);
      res.json({
        result: "failure",
        message: error,
      });
    });
});

router.get("/me", (req, res) => {
  const currentUser = Parse.User.current();

  if (currentUser) {
    const { username, email, name, preferences, tripsCounter, placesVisited } =
      currentUser.toJSON();
    const responseObj = {
      username,
      email,
      name,
      preferences,
      tripsCounter,
      placesVisited,
    };
    res.json(responseObj);
  } else {
    res.json({
      result: "failure",
      message: "No user logged in",
    });
  }
});

//update user preferences
//structure of the request body below:
// {
//     "preferences": {
//       "artAndCulture": true,
//       "museums": false,
//       "architecture": true,
//       "roadsideAttractions": false,
//       "foodAndDrink": true,
//       "nature": false,
//       "history": true
//     }
// }

router.put("/update/preferences", (req, res) => {
  const user = Parse.User.current();

  if (!user) {
    res.json({
      result: "failure",
      message: "No user logged in",
    });
  }

  const preferences = req.body.preferences;

  user.set("preferences", preferences);

  user
    .save()
    .then(() => {
      res.json({
        result: "Success",
      });
    })
    .catch((error) => {
      res.json({
        result: "failure",
        message: error,
      });
    });
});

//update user trips

router.put("/update/tripsCounter", (req, res) => {
  const user = Parse.User.current();

  user.set("tripsCounter", req.body.tripsCounter);

  user
    .save()
    .then(() => {
      res.json({
        result: "Success",
      });
    })
    .catch((error) => {
      res.json({
        result: "failure",
        message: error,
      });
    });
});

//update user places visited counter
router.put("/update/placesVisited", (req, res) => {
  const user = Parse.User.current();

  user.set("placesVisited", req.body.placesVisited);

  user
    .save()
    .then(() => {
      res.json({
        result: "Success",
      });
    })
    .catch((error) => {
      res.json({
        result: "failure",
        message: error,
      });
    });
});

//update user favorites/saved
router.put("/update/favorites", (req, res) => {
  const user = Parse.User.current();

  user.set("favorites", req.body.favorites);

  user
    .save()
    .then(() => {
      res.json({
        result: "Success",
      });
    })
    .catch((error) => {
      res.json({
        result: "failure",
        message: error,
      });
    });
});

//update user email and username
router.put("/update/email", (req, res) => {
    const user = Parse.User.current();
    // Regex for email format validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const email = req.body.email;
    if(!emailRegex.test(email)){
        return res.json({
            result: "failure",
            message: "Invalid email format",
        });
    }
    
    user.set("email", email);
    user.set("username", req.body.email);
    
    user
        .save()
        .then(() => {
        res.json({
            result: "Success",
        });
        })
        .catch((error) => {
        res.json({
            result: "failure",
            message: error,
        });
        });
})

//update user name
router.put("/update/name", (req, res) => {
    const user = Parse.User.current();

    if(!user){
      res.json({
          result: "failure",
          message: "No user logged in",
      });
    }
    
    user.set("name", req.body.name);
    
    user
        .save()
        .then(() => {
        res.json({
            result: "Success",
        });
        })
        .catch((error) => {
        res.json({
            result: "failure",
            message: error,
        });
        });
});

//endpoint that sends an email to reset password
router.put("/update/password", (req, res) => {
    const user = Parse.User.current();

    if(!user){
        res.json({
            result: "failure",
            message: "No user logged in",
        });
    }

    const userEmail = user.get("email");

    Parse.User.requestPasswordReset(userEmail).then(() => {
        res.json({
            result: "Email to reset password has been sent.",
        });
    }).catch((error) => {
        res.json({
            result: "failure",
            message: error,
        });
    });
});

module.exports = router;
