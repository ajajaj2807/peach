import firebase from "firebase/app";
import "firebase/auth";
import "firebase/functions";
import "firebase/firestore";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBvfTLy0n59Gk2M3tQ2GH6manE6XuFzjx0",
    authDomain: "peach-backend.firebaseapp.com",
    projectId: "peach-backend",
  });
}

export default firebase;
