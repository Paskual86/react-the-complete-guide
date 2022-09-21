// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBCVJ6Wsju_FHtwA0_P04CG6PWmQ7DlVs",
  authDomain: "expense-tracker-ec16f.firebaseapp.com",
  projectId: "expense-tracker-ec16f",
  storageBucket: "expense-tracker-ec16f.appspot.com",
  messagingSenderId: "141208506322",
  appId: "1:141208506322:web:352b8f1997ce97779d420b",
  measurementId: "G-MVFPP27RQ5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
