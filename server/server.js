const express = require('express');
const mongoose = require('mongoose');
const bodyParser =require('body-parser');
const product = require('./models/productModel');
const productRouter = require('./routes/routes');
const orderRouter = require('./routes/orderRoutes');
const runDb = require('./config/db');

const app = express();
app.use(bodyParser.json());
app.use('/',productRouter);
app.use('/',orderRouter);
 
//run db
 runDb();
 
 app.listen("5001",()=>{
    console.log("connection done successfully")
 })