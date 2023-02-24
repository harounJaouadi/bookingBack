import express from "express";

const hotelsRouter=express.Router()

hotelsRouter.get("/hotels",(req,res)=>{
    res.json({
        msg : "holtels Router get"
    })
})
export default hotelsRouter ; 