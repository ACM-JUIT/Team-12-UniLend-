import admin from "firebase-admin";

admin.initializeApp({
  credential: admin.credential.cert(
    process.env.NODE_ENV === "production"
      ? "/etc/secrets/serviceAccountKey.json"
      : ("./backend/serviceAccountKey.json" as string)
  ),
});

export default admin;
