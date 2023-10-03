require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const Parse = require('parse/node');

const app = express();

app.use(bodyParser.json());

const userRouter = require('./routes/user');

app.use('/Users', userRouter);

app.listen(1337, function() {
    console.log('Express server running on port 1337.');
});