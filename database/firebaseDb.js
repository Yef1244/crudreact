// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCh3WKu_Z8sDa2K1STMXSLoGsXrfJZKcWo",
    authDomain: "fbusers-a2403.firebaseapp.com",
    projectId: "fbusers-a2403",
    storageBucket: "fbusers-a2403.appspot.com",
    messagingSenderId: "219249061361",
    appId: "1:219249061361:web:95cdb6e11dfd83a44d6850",
    measurementId: "G-7D5PR71FGY"
};
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export default db;