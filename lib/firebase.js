// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyRFbpfnkL8VsyOvX-v98Iw-QSreOTHyg",
  authDomain: "primeraapp-40f83.firebaseapp.com",
  projectId: "primeraapp-40f83",
  storageBucket: "primeraapp-40f83.firebasestorage.app",
  messagingSenderId: "673762634428",
  appId: "1:673762634428:web:3fb6036da6c86605a7beb9",
  measurementId: "G-5XV73FNL28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);