// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZWZpsRQSI_NGZCbfBa4QNjlyzcb96MGY",
  authDomain: "fir-dragon-projects.firebaseapp.com",
  projectId: "fir-dragon-projects",
  storageBucket: "fir-dragon-projects.appspot.com",
  messagingSenderId: "750455214036",
  appId: "1:750455214036:web:3bff4065797494b48b9041"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;