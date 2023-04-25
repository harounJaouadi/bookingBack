import express from "express";
import { createRoom, deleteRoom, getAllRooms, getRoomById, updateRoom, updateRoomAvailability } from "../controllers/rooms.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const roomsRouter = express.Router();

//add new Hotel
roomsRouter.post("/:hotelId",verifyAdmin, createRoom);
//update a hotel
roomsRouter.put("/:id",verifyAdmin, updateRoom);
roomsRouter.put("/availability/:id", updateRoomAvailability);
//delete a hotel
roomsRouter.delete("/:id/:hotelId",verifyAdmin, deleteRoom);
// get one hotel
roomsRouter.get("/:id", getRoomById);
//get all hotels
roomsRouter.get("/", getAllRooms);

export default roomsRouter;