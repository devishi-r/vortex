// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpvTrV2qJ4zhiFMyYvBWwSyrvlTXd1PlY",
  authDomain: "vortex-77060.firebaseapp.com",
  projectId: "vortex-77060",
  storageBucket: "vortex-77060.appspot.com",
  messagingSenderId: "832175265393",
  appId: "1:832175265393:web:0b0b2398525e60bd6fadd0",
  // measurementId: "G-30KRN6G54Q" // Omit this if not using Analytics
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore

export { db }; // Export Firestore for use in other parts of your application
