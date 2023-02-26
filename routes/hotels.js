import express from "express";
import { createHotel, deleteHotel, getAllHotels, getHotelById, updateHotel } from "../controllers/hotels.js";


const hotelsRouter = express.Router();

//add new Hotel
hotelsRouter.post("/", createHotel);
//update a hotel
hotelsRouter.put("/:id", updateHotel);
//delete a hotel
hotelsRouter.delete("/:id", deleteHotel);
// get one hotel
hotelsRouter.get("/:id", getHotelById);
//get all hotels
hotelsRouter.get("/", getAllHotels);

export default hotelsRouter;
