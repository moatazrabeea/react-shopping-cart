const mongoose = require('mongoose');

function runDb(){
    const mongoConnectionString = "mongodb://localhost/react-shopping-cart";

 mongoose.connect(mongoConnectionString,{
    useNewUrlParser:true,
    useUnifiedTopology:true
 }).then(res=>console.log("connection done"))

}

module.exports = runDb