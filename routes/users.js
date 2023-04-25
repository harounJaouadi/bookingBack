import express from "express";
import { deleteUser, getAllUsers, getUserById, updateUser } from "../controllers/users.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";


const usersRouter = express.Router();

//test authenetification 
// usersRouter.get("/testauth",verifyToken,(req,res,next)=>{
//     res.send("authentified") ; 
// })
// usersRouter.get("/verifyuser/:id",verifyUser,(req,res)=>{
//     res.send("you are verified and you can delete your account") ; 
// })
// usersRouter.get("/verifyAdmin/:id" , verifyAdmin , (req,res)=>{
//     res.send("you are admin and you can do what you want") ; 
// })
//update a User
usersRouter.put("/:id",verifyUser, updateUser);
//delete a User
usersRouter.delete("/:id",verifyUser, deleteUser);
// get one User
usersRouter.get("/:id",verifyUser, getUserById);
//get all Users
usersRouter.get("/",verifyAdmin, getAllUsers);


export default usersRouter ;
