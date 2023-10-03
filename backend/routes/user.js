const express = require('express');
const Parse = require('parse/node');
const router = express.Router();
//create end

require('dotenv').config();

// Initialize Parse SDK with Back4App's credentials
Parse.initialize(process.env.B4A_APPLICATION_ID, process.env.B4A_JAVASCRIPT_ID);
Parse.serverURL = "https://parseapi.back4app.com/";

router.get('/signup',(req, res) => {
    const user = new Parse.User();

    console.log(req.body)
    user.set("username", req.body.username)
    user.set("password", req.body.password)
    user.set("email", req.body.email)

    user.signUp().then((obj)=>{
       res.json({"result": "success"})
    }).catch((err)=>{
        console.log(err)   
        res.json({"result": "failure", "message": err})
    }) 
});

router.post('/login', (req, res, next) => {
    const username = req.body.username
    const password = req.body.password

    Parse.User.logIn(username, password).then((obj)=>{
        res.json({
            "result": "success"
        })
     }).catch((err)=>{
        console.log(err)
        res.json({"result": "failure", "message": err})
    })
});
////////////////////////////////

router.post('/logout', (req, res)=> {    
    const currentUser = Parse.User.current();

    Parse.User.logOut(currentUser).then(() => {
        res.send('User logged out successfully');
    }).catch((error)=> {
        console.error('Error logging out user', error)
        res.status(500).send('An error occured while logging out the user.')
    })
})

router.get('/users/me', (req, res) => {
    const currentUser = Parse.User.current();
    if (currentUser) {
        res.send(currentUser);
    } else {
        res.send('No user logged in');
    }
});

module.exports = router;