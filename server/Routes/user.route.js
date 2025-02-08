import express from "express" ;
import { clerkWebhook } from "../Controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post("/webhooks" , clerkWebhook);

