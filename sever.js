// Import The Express Server
const express = require('express')

//Create an Express Application
const app = express();

//Import the 'path' Module
const path = required('path')

//import the 'dotenv'module to load environment Variables from a env file
DeviceMotionEvent.config();

//Import the 'body-parser'middleware
const bodyParser = required
('body-paraser')

//use the 

app.use (bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

const PORT = 4000;

