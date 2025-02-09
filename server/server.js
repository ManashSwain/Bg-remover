import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./utils/connectDB.js";
import userRouter from "./Routes/user.route.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// connect db logic 
connectDB();


// cors options 

const corsOptions = {
    origin: ["http://localhost:5173", "https://yourfrontend.com"], 
    methods: ["GET", "POST", "PUT", "DELETE"], 
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, 
  };



// middlewares 

app.use(cors(corsOptions));
app.use(express.json());

// route middlewares 

app.use("/api/user" , userRouter);

// Backend route 
app.get("/" , (req,res)=>{
  res.status(200).send("Backend API");
});

app.listen(PORT , ()=>{
  console.log(`App is listening on Port ${PORT}`);
})