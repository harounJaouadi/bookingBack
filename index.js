import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/auth.js"
import hotelsRouter from "./routes/hotels.js";
import roomsRouter from "./routes/rooms.js";
import usersRouter from "./routes/users.js";


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

app.use("/api/v1",authRouter)
app.use("/api/v1",hotelsRouter)
app.use("/api/v1",roomsRouter)
app.use("/api/v1",usersRouter)

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