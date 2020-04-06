const express = require('express');
const bodyParser = require('body-parser');

const app = express ();
const { API_VERSION } = require('./config');

const userRoutes = require("./routers/user");


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Configure header HTTP

app.use(`/api`,userRoutes);



module.exports = app;