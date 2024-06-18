// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// Uncomment the line below if you are using Firebase Analytics
// import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3VRVNCEIyezlNe5dsPOpBT2Y0GTfRC78",
  authDomain: "farmer-assist-d444e.firebaseapp.com",
  projectId: "farmer-assist-d444e",
  storageBucket: "farmer-assist-d444e.appspot.com",
  messagingSenderId: "1031940964877",
  appId: "1:1031940964877:web:03b40c45fdc91bd1f68b44",
  measurementId: "G-T79KLDJLZW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Uncomment the line below if you are using Firebase Analytics
// const analytics = getAnalytics(app);

const db = getFirestore(app);

export { auth, db };
