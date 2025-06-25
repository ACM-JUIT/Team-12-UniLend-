import admin, { ServiceAccount } from "firebase-admin";

admin.initializeApp({
  credential: admin.credential.cert(
    process.env.NODE_ENV === "production"
      ? (process.env.SERVICE_ACCOUNT_KEY as ServiceAccount)
      : ("./backend/serviceAccountKey.json" as string)
  ),
});

export default admin;
