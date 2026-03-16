// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAP31RoKlpnp0XJV8LVJQB2BBOZox1ZsEs",
  authDomain: "netflixgpt-8e299.firebaseapp.com",
  projectId: "netflixgpt-8e299",
  storageBucket: "netflixgpt-8e299.appspot.com",
  messagingSenderId: "274262071202",
  appId: "1:274262071202:web:9c823540091096a13184fb",
  measurementId: "G-YYB3L37D2H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
