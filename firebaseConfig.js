import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAOY2QK09-AHuCTZe4Tqk1SKwkvHmvuVUE",
    authDomain: "trial-faef6.firebaseapp.com",
    projectId: "trial-faef6",
    storageBucket: "trial-faef6.appspot.com",
    messagingSenderId: "1068001026200",
    appId: "1:1068001026200:web:c221fdebc913e75bf6b0ed"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)