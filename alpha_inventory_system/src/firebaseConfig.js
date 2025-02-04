import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdhQDbcsIb2sOd3QKtJL3vd5MtvKxbVes",
    authDomain: "alphalp-gas-stock-management.firebaseapp.com",
    projectId: "alphalp-gas-stock-management",
    storageBucket: "alphalp-gas-stock-management.firebasestorage.app",
    messagingSenderId: "56327613798",
    appId: "1:56327613798:web:9e2a4d0b6d88ceeb5eaca7",
    measurementId: "G-4T997KDH2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
