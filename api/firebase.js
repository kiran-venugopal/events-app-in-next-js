// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "next-js-learnings.firebaseapp.com",
  projectId: "next-js-learnings",
  storageBucket: "next-js-learnings.appspot.com",
  messagingSenderId: "593013521791",
  appId: "1:593013521791:web:48580ea4c00cac841fae4a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreObj = getFirestore(app);
export default app;
