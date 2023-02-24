import express from "express";

const authRouter=express.Router() ; 


authRouter.get("/auth",(req,res)=>{
    res.json({
        msg : "test auth router"
    })
}) ; 


export default authRouter ; 