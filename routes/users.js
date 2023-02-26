import express from "express";
import { deleteUser, getAllUsers, getUserById, updateUser } from "../controllers/users.js";


const usersRouter = express.Router();

//update a User
usersRouter.put("/:id", updateUser);
//delete a User
usersRouter.delete("/:id", deleteUser);
// get one User
usersRouter.get("/:id", getUserById);
//get all Users
usersRouter.get("/", getAllUsers);

export default usersRouter ;
