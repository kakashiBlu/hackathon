// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getStorage} from 'firebase/storage'
import{getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNGRUF5b3K2wQij15zLPPz-Lv8NUB7i7Q",
  authDomain: "ju-nlp.firebaseapp.com",
  projectId: "ju-nlp",
  storageBucket: "ju-nlp.appspot.com",
  messagingSenderId: "872297612474",
  appId: "1:872297612474:web:c3419063e1fe018786ee83"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getFirestore(app);