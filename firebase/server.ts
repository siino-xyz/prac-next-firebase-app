import { cert, initializeApp } from "firebase-admin/app";

initializeApp({
  credential: cert(process.env.FIREBASE_ADMIN_KEY as string),
});
