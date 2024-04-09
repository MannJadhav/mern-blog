// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-2d83a.firebaseapp.com",
  projectId: "mern-blog-2d83a",
  storageBucket: "mern-blog-2d83a.appspot.com",
  messagingSenderId: "765321754474",
  appId: "1:765321754474:web:5fe8600673139235205713"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
