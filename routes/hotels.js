import express from "express";
import { countByCity, countByType, createHotel, deleteHotel, getAllHotels, getHotelById, getHotelRooms, updateHotel } from "../controllers/hotels.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const hotelsRouter = express.Router();

//add new Hotel
hotelsRouter.post("/",verifyAdmin, createHotel);
//update a hotel
hotelsRouter.put("/:id",verifyAdmin, updateHotel);
//delete a hotel
hotelsRouter.delete("/:id",verifyAdmin, deleteHotel);
// get one hotel
hotelsRouter.get("/find/:id", getHotelById);
//get all hotels
hotelsRouter.get("/", getAllHotels);

hotelsRouter.get("/countByCity" ,countByCity) ; 

hotelsRouter.get("/countByType",countByType) ; 

hotelsRouter.get("/room/:id" , getHotelRooms)

export default hotelsRouter;
