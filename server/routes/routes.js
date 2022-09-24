const product = require('../models/productModel')
const express = require('express')
const router = express.Router();
router.get("/api/products",async (req,res)=>{
    const products = await product.find();
    res.send(products);
 })

 router.post("/api/products",async (req,res)=>{
    const newProduct = await new product(req.body);
    const saveP = newProduct.save();
    res.send(saveP)

 })

 router.delete("/api/products/:id" , async (req,res)=>{
    const deletedProduct = await product.findByIdAndDelete(req.params.id)
    res.send(deletedProduct);
 })

 module.exports = router;