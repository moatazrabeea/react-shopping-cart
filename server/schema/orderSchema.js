const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
        
        title:String,
        email:String
    },{
        timestamps:true
    }
 )

 module.exports = orderSchema;