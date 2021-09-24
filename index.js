// this is the starting point of our express server

let express = require('express');
let env = require("dotenv").config();
let app = express();

// enable app to be able to parse json bodies in post/put
app.use(express.json());

// let exampleRoute = require("./example/route");
// app.use(exampleRoute);

let userRoute = require('./router/users');-
app.use(userRoute);

let port = process.env.PORT || 4000;

app.listen(port, function(){
    console.log("Starting the app server on port", port);
})