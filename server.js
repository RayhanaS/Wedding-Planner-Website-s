// import express 
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/connectDB');
require("dotenv").config ();

// init express 
const app = express();

const authRoute = require('./routes/auth');
app.use (cors());

 //create port
  connectDB() 
  const port = process.env.PORT || 4000 ;
   
  app.use(express.json ());
 
  app.use ('/api',authRoute);


 // create a server  
 app.listen (port,(err) => 

 err?console.log(err)   //(if)//
 :  //(else)//
 console.log (`server listening on port ${port}`));

