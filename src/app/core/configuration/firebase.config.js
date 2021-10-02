// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-Tcg8x3jb9-sosEggUJIvbiBK6nCmRmI",
  authDomain: "pondz-game-mangement.firebaseapp.com",
  projectId: "pondz-game-mangement",
  storageBucket: "pondz-game-mangement.appspot.com",
  messagingSenderId: "344244978180",
  appId: "1:344244978180:web:e3a717180670475c94ab51",
  measurementId: "G-Q5T92HWLTL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);