import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
import createError from "../utils/createError.js";

//hotel id is send as a req.paraù.hostelId
export const createRoom = async (req, res, next) => {
  try {
    const hotelId = req.params.hotelId;
    const newRoom = new Room(req.body);
    const savedRoom = await newRoom.save();
    try {
      const hotel = await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
      res.status(200).json(savedRoom);
    } catch (error) {
      next(error);
      return;
    }
  } catch (error) {
    next(error);
    return;
  }
};

export const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (error) {
    next(error);
  }
};
export const updateRoomAvailability = async (req, res, next) => {
  try {
    await Room.updateOne(
      { "roomNumbers._id": req.params.id },
      {
        $push: {
          "roomNumbers.$.unavailableDates": req.body.dates
        },
      }
    );
    res.status(200).json("Room status has been updated.");
  } catch (err) {
    next(err);
  }
};
export const deleteRoom = async (req, res, next) => {
  try {
    const hotelId = req.params.hotelId;
    const hotel = await Hotel.findByIdAndUpdate(hotelId, {
      $pull: { rooms: req.params.id },
    });
    // console.log(hotel)
    if(!hotel){
        const error=createError(404,"there is no hotel with this id") ; 
        next(error) ; return 0;
    }
    const deletedRoom=await Room.findByIdAndDelete(req.params.id);
    if(!deletedRoom){
        console.log("ifff")
        const error=createError(404,"there is no room with this id") ; 
        next(error) ;
        return 0;


    } 
    console.log("eeeeee")
    res.status(200).json("the room is deleted successfully");
  } catch (error) {
    next(error);
    return;
  }
};

export const getRoomById = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (error) {
    next(error);
  }
};

export const getAllRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    next(error);
  }
};



