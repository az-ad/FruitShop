// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyBreqMg2YjZ90sdygvelEUvlvt369LJ5Wk",
    // authDomain: "azad-fruit-shop.firebaseapp.com",
    // projectId: "azad-fruit-shop",
    // storageBucket: "azad-fruit-shop.appspot.com",
    // messagingSenderId: "830473569211",
    // appId: "1:830473569211:web:1b96e651d9203fa17dba9e"
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;