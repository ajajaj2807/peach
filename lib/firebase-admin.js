import admin from "firebase-admin";
import "firebase/auth";
import "firebase/functions";
import "firebase/firestore";

const serviceAccount = require("../serviceAccountKey.json")

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const auth = admin.auth()
const db = admin.firestore()

export {auth, db};
