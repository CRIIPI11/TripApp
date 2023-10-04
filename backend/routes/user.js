const express = require('express')
const AsyncStorage = require('@react-native-async-storage/async-storage')
const Parse = require('parse/node')
const router = express.Router()
//create end

require('dotenv').config();

// Initialize Parse SDK with Back4App's credentials
Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(process.env.B4A_APPLICATION_ID, process.env.B4A_JAVASCRIPT_ID);
Parse.serverURL = "https://parseapi.back4app.com/";

Parse.User.enableUnsafeCurrentUser()

router.get('/signup',(req, res) => {
    const user = new Parse.User();

    console.log(req.body)
    user.set("username", req.body.email)
    user.set("password", req.body.password)
    user.set("email", req.body.email)
    user.set("name", req.body.name)

    user.signUp().then((obj)=>{
       res.json({"result": "success"})
    }).catch((err)=>{
        console.log(err)   
        res.json({"result": "failure", "message": err})
    }) 
});

router.post('/login', (req, res) => {
    const username = req.body.email
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

router.post('/logout', (req, res)=> {   
    Parse.User.logOut(currentUser).then(() => {
        res.send('User logged out successfully');
    }).catch((error)=> {
        console.error('Error logging out user', error)
        res.status(500).send('An error occured while logging out the user.')
    })
})

router.get('/me', (req, res) => {
    const currentUser = Parse.User.current();
    if (currentUser) {
        res.send(currentUser);
    } else {
        res.send('No user logged in');
    }
});

module.exports = router;