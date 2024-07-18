// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgjHY45iUxdt-JCLZM4DUzmEVXjieunq0",
  authDomain: "netflix-a2a16.firebaseapp.com",
  projectId: "netflix-a2a16",
  storageBucket: "netflix-a2a16.appspot.com",
  messagingSenderId: "941113727161",
  appId: "1:941113727161:web:0c7f3b58af72d4ee3be368",
  measurementId: "G-2E59V81CGT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();