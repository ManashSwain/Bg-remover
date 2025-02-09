import jwt from "jsonwebtoken";

// middleware function to decode jwt token to get clerkid 

export const authUser = async (req,res,next)=>{
   try {
       const {token} = req.headers 

       if(!token){
        return res.status(500).json({success : false , message : "Not authorized"})
       }

       const token_decode = jwt.decode(token);
       req.body.clerkId= token_decode.clerkId;
       next();
   }
   catch(err){
    console.error(err);
    res.status(500).json({success : false , message : "Some error occured!"})
   }
} 