// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDscWLe_GdTcU0OAOTcR5ZhHeZOdXyDppE",
  authDomain: "green-thumb-f3610.firebaseapp.com",
  projectId: "green-thumb-f3610",
  storageBucket: "green-thumb-f3610.firebasestorage.app",
  messagingSenderId: "1052786085742",
  appId: "1:1052786085742:web:2a972b52346ed85761fb7f",
  measurementId: "G-TYB757QC1B"
};


export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);