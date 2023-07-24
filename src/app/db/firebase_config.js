// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDc4MIT4iVdfK5zT9Qs07jsCsp876_Fhwc",
  authDomain: "test-9f42a.firebaseapp.com",
  projectId: "test-9f42a",
  storageBucket: "test-9f42a.appspot.com",
  messagingSenderId: "369441327453",
  appId: "1:369441327453:web:44c7c76f860720833bc0b4",
  measurementId: "G-LJ1BS3TMZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth=getAuth(app)
