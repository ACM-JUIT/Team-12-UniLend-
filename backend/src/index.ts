import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import verifyFirebaseToken from "./firebase/auth";

import dotenv from "dotenv";
dotenv.config()

const app = express();

app.use(cors());
app.use(express.json());
app.use(async (req: Request, res: Response, next: NextFunction) => {
    await verifyFirebaseToken(req, res, next);
})



app.get("/", (req: Request, res: Response) => {
    res.status(200).json({message: "Once authorized, ask signatures at /getSignature for cloudinary upload"});
    return;
})

app.get("/getSignature", (req: express.Request, res: express.Response) => {

})




const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> {
    console.log("Listening to server at port: ", PORT);
})