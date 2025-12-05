import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBCjzCv1mAAjhV9_ljTXZ7Fn8Ix1_vU-k",
  authDomain: "kurisu-lab.firebaseapp.com",
  projectId: "kurisu-lab",
  storageBucket: "kurisu-lab.firebasestorage.app",
  messagingSenderId: "754858147142",
  appId: "1:754858147142:web:1f03a6f17c442132297947"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
