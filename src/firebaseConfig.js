// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPHB1TzNX8l_jT5zUSoboKAuvpDMGZUj4",
    authDomain: "linkedin-clone-382fc.firebaseapp.com",
    projectId: "linkedin-clone-382fc",
    storageBucket: "linkedin-clone-382fc.appspot.com",
    messagingSenderId: "953404672763",
    appId: "1:953404672763:web:f6be7f5585a8cdb39e7e5e",
    measurementId: "G-B6WRL7KDGT"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };
