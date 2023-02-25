import express from "express";
import { createHotel, getAllHotels, getHotelById, updateHotel } from "../controllers/hotels.js";
import Hotel from "../models/Hotel.js";


const hotelsRouter = express.Router();

//add new Hotel
hotelsRouter.post("/", createHotel);
//update a hotel
hotelsRouter.put("/:id", updateHotel);
//delete a hotel
hotelsRouter.delete("/:id", async (req, res,next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("the user is deleted successfully");
  } catch (error) {
    next(error);
  }
});
// get one hotel
hotelsRouter.get("/:id", getHotelById);
//get all hotels
hotelsRouter.get("/", getAllHotels);

export default hotelsRouter;
