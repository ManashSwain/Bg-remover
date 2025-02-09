import express from "express" ;
import { clerkWebhook, userCredits } from "../Controllers/user.controller.js";
import { authUser } from "../Middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/webhooks" , clerkWebhook);
userRouter.get("credits" , authUser , userCredits);


export default userRouter;
