// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estatehub.firebaseapp.com",
  projectId: "mern-estatehub",
  storageBucket: "mern-estatehub.firebasestorage.app",
  messagingSenderId: "556896472276",
  appId: "1:556896472276:web:15710fce29c2f005963f41"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);