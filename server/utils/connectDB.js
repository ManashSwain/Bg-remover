import mongoose from "mongoose";

// connected  and disconnected  events 

mongoose.connection.on("connected" , ()=>{
    console.log("Connected to  MongoDB Database");
})

mongoose.connection.on("disconnected" , ()=>{
    console.log("Disconnected from MongoDB Database");
})

const connectDB = async ()=>{
   try {
      await mongoose.connect(process.env.MONGODB_URI);
   }catch(err){
     console.error("Error occured while connection to Database " , err)
   }
}

export default connectDB ;