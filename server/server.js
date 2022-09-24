const express = require('express');
const mongoose = require('mongoose');
const bodyParser =require('body-parser');
const product = require('./models/productModel');
const router = require('./routes/routes');

const app = express();
app.use(bodyParser.json());
app.use('/',router);
 
 const mongoConnectionString = "mongodb://localhost/react-shopping-cart";

 mongoose.connect(mongoConnectionString,{
    useNewUrlParser:true,
    useUnifiedTopology:true
 }).then(res=>console.log("connection done"))

 

 

 app.listen("5001",()=>{
    console.log("connection done successfully")
 })