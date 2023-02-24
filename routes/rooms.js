import express from "express";

const roomsRouter=express.Router()

roomsRouter.get("/rooms",(req,res)=>{
    res.json({
        msg : "rooms Router get"
    })
})
export default roomsRouter ; 