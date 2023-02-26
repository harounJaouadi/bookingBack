import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/auth.js"
import hotelsRouter from "./routes/hotels.js";
import roomsRouter from "./routes/rooms.js";
import usersRouter from "./routes/users.js";
import cookieParser from "cookie-parser";


dotenv.config();
mongoose.set('strictQuery', false);

const connect =  function () {
  try {
     mongoose.connect(process.env.MONGO_URI);
    console.log("connected to the db ");
  } catch (error) {
    throw error;
  }
};


const app = express();
//middlewares 
app.use(express.json()) ;
app.use(cookieParser()) ; 
//end
app.use("/api/v1/auth",authRouter)
app.use("/api/v1/hotel",hotelsRouter)
app.use("/api/v1/room",roomsRouter)
app.use("/api/v1/user",usersRouter)
app.use((err,req,res,next)=>{
  const errorStatus=err.status || 500 ; 
  const errorMsg=err.message || "something going wrong" ; 
  res.status(errorStatus).json({
    success :false , 
    status :errorStatus , 
    message : errorMsg , 
    stack : err.stack 
  });

})


app.listen(5000, () => {
    connect();
    console.log("listening ... ");
});



//check the connection to the mongo db 
// mongoose.connection.on("disconnected",()=>{
//     console.log("disconnected from db") ; 
// }) ; 
// mongoose.connection.on("connected" , ()=>{
//     console.log("connected again") ; 
// })