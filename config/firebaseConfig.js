// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getfirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwEhg9J7TLnBB_rX1gzbUMMwuEMJkKZPY",
  authDomain: "unilend-ce0ed.firebaseapp.com",
  projectId: "unilend-ce0ed",
  storageBucket: "unilend-ce0ed.firebasestorage.app",
  messagingSenderId: "1022823064968",
  appId: "1:1022823064968:web:387ce1ef6d7a3bb1e4c63d",
  measurementId: "G-FQX9EZ3LWJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getfirestore(app);