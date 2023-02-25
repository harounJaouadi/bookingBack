import express from "express";
import { register } from "../controllers/auth.js";


const authRouter=express.Router() ; 


authRouter.get("/auth",register) ; 


export default authRouter ; 