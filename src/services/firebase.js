// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIQCnlyMyxq0eKld55-fsQ1ghl08Abj3c",
  authDomain: "react-auth-ff060.firebaseapp.com",
  projectId: "react-auth-ff060",
  storageBucket: "react-auth-ff060.firebasestorage.app",
  messagingSenderId: "1073554380596",
  appId: "1:1073554380596:web:0987372e7e34f9e88df761",
  measurementId: "G-7NG1QC510N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);