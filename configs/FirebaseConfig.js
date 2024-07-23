// Import the functions you need from the SDKs you need
import { initializeApp  } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmRqGzc1E-uGwU4Cs1BQgTya8GtQq8vDA",
  authDomain: "react-native-27551.firebaseapp.com",
  projectId: "react-native-27551",
  storageBucket: "react-native-27551.appspot.com",
  messagingSenderId: "622278517100",
  appId: "1:622278517100:web:7246ebebf524b9afe1d349",
  measurementId: "G-QZ3K7LJEDX",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)

