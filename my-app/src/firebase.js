// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdhxkY_wy5eFjXmnWQeXhDk_8VYoJm7d8",
    authDomain: "myfirebaseproject-8b2c2.firebaseapp.com",
    projectId: "myfirebaseproject-8b2c2",
    storageBucket: "myfirebaseproject-8b2c2.appspot.com",
    messagingSenderId: "1018194697600",
    appId: "1:1018194697600:web:d98e5a78790418307af565"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();