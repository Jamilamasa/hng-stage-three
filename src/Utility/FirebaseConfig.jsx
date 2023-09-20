import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXR5vE2MgG0Dv6EOsoAys8kPpUfeIO1jw",
  authDomain: "hngstagethree-b8541.firebaseapp.com",
  projectId: "hngstagethree-b8541",
  storageBucket: "hngstagethree-b8541.appspot.com",
  messagingSenderId: "615244530068",
  appId: "1:615244530068:web:8b0f3f87b779a5ac028f81"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)