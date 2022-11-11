const order = require('../models/orderModel')
const express = require('express')
const router = express.Router();

router.get("/api/orders",async (req,res)=>{
    const orders = await order.find();
    res.send(orders);
 })

 router.post("/api/orders",async (req,res)=>{
    const newOrder = await new order(req.body);
    const saveOrder = await newOrder.save();
    res.send(saveOrder)

 })

 router.delete("/api/orders/:id" , async (req,res)=>{
    const deletedOrder = await order.findByIdAndDelete(req.params.id)
    res.send(deletedOrder);
 })

 module.exports = router;