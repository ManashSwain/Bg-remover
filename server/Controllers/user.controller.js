import { Webhook } from "svix";
import dotenv from "dotenv";
import userModel from "../Models/user.model.js";

dotenv.config();

// controller function to manage clerk user with mongodb database 
 export const clerkWebhook = async ( req, res)=>{
  try {
    const SIGNING_SECRET = process.env.CLERK_WEBHOOK_SECRET

    if (!SIGNING_SECRET) {
      throw new Error('Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local')
    }
  
    // Create new Svix instance with secret
    const wh = new Webhook(SIGNING_SECRET);

   // Get headers
  const svix_id = req.get("svix-id");
  const svix_timestamp = req.get("svix-timestamp");
  const svix_signature = req.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return res.status(400).json({ error: "Missing Svix headers" });
  }

  // Get body
  const payload = req.body;
  const body = JSON.stringify(payload)

   // Verify payload with headers
   const evt = await wh.verify(body, {
    'svix-id': svix_id,
    'svix-timestamp': svix_timestamp,
    'svix-signature': svix_signature,
  })
  // Do something with payload
  // For this guide, log payload to console
  const { id , email_addresses,profile_image_url , first_name, last_name } = evt.data
  const eventType = evt.type

  switch (eventType) {
    case "user.created": {
         const userData = {
            clerkId : id ,
            email : email_addresses[0].email_address,
            photo : profile_image_url,
            firstName : first_name ,
            lastName : last_name , 
         }

         await userModel.create(userData);
         res.json({});
        break;
  }
  case "user.updated": {
    const userData = {
        email : email_addresses[0].email_address,
        photo : profile_image_url,
        firstName : first_name ,
        lastName : last_name , 
     }

     await userModel.findOneAndUpdate({clerkId : id} , userData);
     res.json({});
    break;
}
case "user.deleted": {
    await userModel.findOneAndDelete({clerkId : id});
    res.json({}) ; 
    break;
}
    default:
        break;
  }
  console.log(`Received webhook with ID ${id} and event type of ${eventType}`)
  console.log('Webhook payload:', body)

  return res.status(200).json({ message: "Webhook received" });

  
  }
  catch(err){
    console.error('Error: Could not verify webhook:', err)
    return res.status(400).json({ error: "Verification error" });
  }
}

// API controller function to get user available credits data 


export const userCredits = async(req,res) => {
    try {
        const {clerkId} = req.body ;
        const userData = await userModel.findOne({clerkId });

        res.status(200).json({success : true , credits : userData.creditBalance});

    }
    catch(err){
        console.error(err);
        res.status().json({success : false , message : "Some error occured"});
    }
}

