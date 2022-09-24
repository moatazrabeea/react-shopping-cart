const mongoose = require('mongoose');
const productSchema = require('../schema/productScema')
const product = mongoose.model("products",productSchema)

module.exports= product