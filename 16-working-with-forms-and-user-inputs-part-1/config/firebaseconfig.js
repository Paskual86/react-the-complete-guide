// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfbgCIVIv_cefEDN7Awl0dB2dO7VAANqs",
  authDomain: "food-project-12486.firebaseapp.com",
  projectId: "food-project-12486",
  storageBucket: "food-project-12486.appspot.com",
  messagingSenderId: "336494995660",
  appId: "1:336494995660:web:d9c256726db3507802ba69",
  measurementId: "G-6YRQF8YVM7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
