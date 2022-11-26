// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARwGr1MdeyyOak5xp4ZurtDeJR8J5cPf4",
  authDomain: "job-portal-ddf38.firebaseapp.com",
  projectId: "job-portal-ddf38",
  storageBucket: "job-portal-ddf38.appspot.com",
  messagingSenderId: "726897371109",
  appId: "1:726897371109:web:8897dc3ae49ad45ede710c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;