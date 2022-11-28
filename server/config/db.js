const mongoose = require('mongoose');

function runDb(){
    const mongoConnectionString = "mongodb://localhost/react-shopping-cart";

 mongoose.connect(process.env.MONGO_URI || mongoConnectionString,{
    useNewUrlParser:true,
    useUnifiedTopology:true
 }).then(res=>console.log("connection done"))

}

module.exports = runDb