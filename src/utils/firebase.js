// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8i_e8lyWp6Nr3xaZyZ4Df2BB3pCoBMQA",
  authDomain: "netflixgpt-da51e.firebaseapp.com",
  projectId: "netflixgpt-da51e",
  storageBucket: "netflixgpt-da51e.firebasestorage.app",
  messagingSenderId: "192019071468",
  appId: "1:192019071468:web:9252b8733009928a6000c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();