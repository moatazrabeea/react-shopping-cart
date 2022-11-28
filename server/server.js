require ('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser =require('body-parser');
const product = require('./models/productModel');
const productRouter = require('./routes/routes');
const orderRouter = require('./routes/orderRoutes');
const runDb = require('./config/db');

const app = express();

//run db
runDb();

app.use(bodyParser.json());
app.use('/',productRouter);
app.use('/',orderRouter);
 
if(process.env.NODE_ENV === 'production'){
   app.use('/',express.static('public'));
   app.get('/',(req,res)=>res.sendFile(__dirname+"/public/index.html"))
}
else{
   app.get('/',(req,res)=>res.send("API Runing"))
}

 const port = process.env.PORT
 app.listen(port || "5001",()=>{
    console.log("connection done successfully")
 })