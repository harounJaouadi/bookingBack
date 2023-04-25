import createError from "./createError.js" ; 
import jwt from "jsonwebtoken" ; 
export const verifyToken=(req,res,next)=>{
    const token=req.cookies.access_token ; 
    if(!req.cookies || !token){
        const error=createError(401,"you are not authentified") ; 
        next(error) ; 
        return
    } ; 
    jwt.verify(token,process.env.JWT,(err,user)=>{
        if(err) {
            const error=createError(403,"the token is not valid") ; 
            next(error) ; 
            return ; 
        } ;
        req.user=user ; 
        next() ; 
    })
    
}

export const verifyUser=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.params.id==req.user.id || req.user.isAdmin){
            next() ; 
            return ; 
        }else{
            const error=createError(403 , "you are not authorized!") ; 
            next(error) ; 
            return ; 

        }
    })
} ; 
export const verifyAdmin=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
            next() ; 
            return ; 
        }else {
            const error=createError(403,"you are not Admin") ; 
            next(error) ;
            return ; 
        }
    })
}