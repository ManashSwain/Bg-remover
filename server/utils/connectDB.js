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
    console.log("🔄 Attempting to connect to MongoDB...");
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("📡 MongoDB Connection Successful");
   }catch(err){
     console.error("Error occured while connection to Database " , err);
     process.exit(1);
   }
}

export default connectDB ;