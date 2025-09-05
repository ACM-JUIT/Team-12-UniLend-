import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import generateUploadSignature from "./cloudinary/generateUploadSignature.js";
import verifyFirebaseToken from "./firebase/auth.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(async (req: Request, res: Response, next: NextFunction) => {
  await verifyFirebaseToken(req, res, next);
});

app.get("/", (req: Request, res: Response) => {
  res
    .status(200)
    .json({
      message:
        "You are authorized, ask signatures at /get-signature for cloudinary upload",
    });
  return;
});

app.get("/get-signature", (req: Request, res: Response) => {
    const {signature, timestamp, eager, folder} = generateUploadSignature();
    console.log("FROM THE BACKEND: ", signature, timestamp, folder)
    res.status(200).json({
        signature,
        timestamp,
        eager, 
        folder,
        cloudname: process.env.CLOUDINARY_CLOUD_NAME,
        apikey: process.env.CLOUDINARY_API_KEY
    })
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Listening to server at port: ", PORT);
});
