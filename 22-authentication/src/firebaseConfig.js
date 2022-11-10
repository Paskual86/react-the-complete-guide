// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDT0n2acoG51dNiFS6a7VoISqIZKmmKO5g',
  authDomain: 'react-authentication-ed9d4.firebaseapp.com',
  projectId: 'react-authentication-ed9d4',
  storageBucket: 'react-authentication-ed9d4.appspot.com',
  messagingSenderId: '1026965233927',
  appId: '1:1026965233927:web:f08ed287b13509e8b1a5a2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
