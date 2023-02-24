import express from "express";

const usersRouter=express.Router()

usersRouter.get("/users",(req,res)=>{
    res.json({
        msg : "users Router get"
    })
})
export default usersRouter ;