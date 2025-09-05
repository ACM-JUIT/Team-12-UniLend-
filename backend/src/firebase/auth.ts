import { NextFunction, Request, Response } from "express";
import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";
import admin from "./init.js";

export default async function verifyFirebaseToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")) {
        return res.status(401).json({error: "Unauthorized access. Please check the token"})
    }

    const authToken = authHeader.split("Bearer ")[1]

    try {
        console.log("ID TOKEN IN SERVER", authToken);
        const decodedToken: DecodedIdToken = await admin.auth().verifyIdToken(authToken);
        req.user = decodedToken; // decoded id gives some of user stuff. you can run getAuth in client to get an idea
        next();
    } catch (error) {
        console.error("Token verification failed in backend: ", error)
        return res.status(401).json({error: "Unauthorized: Please check the token"})
    }
}