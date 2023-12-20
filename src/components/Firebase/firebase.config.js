// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz_TmjFWKdA50FJKQd3jVUPcarYzQvKGY",
  authDomain: "web-project-cf671.firebaseapp.com",
  projectId: "web-project-cf671",
  storageBucket: "web-project-cf671.appspot.com",
  messagingSenderId: "660450154231",
  appId: "1:660450154231:web:cc24e37d2486b1129965f2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };