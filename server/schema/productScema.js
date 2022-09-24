const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        id:String,
        title:String,
        price:Number,
        size:[String],
        imageUrl:String,
        description:String
    }
 )

 module.exports = productSchema;