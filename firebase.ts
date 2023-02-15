// Import the functions you need from the SDKs you need
import { initializeApp  , getApp ,getApps} from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl-Mwm0WlxcmVXwIQ04xGF1DuIiemvXnI",
  authDomain: "chatgpt-messengar.firebaseapp.com",
  projectId: "chatgpt-messengar",
  storageBucket: "chatgpt-messengar.appspot.com",
  messagingSenderId: "267693388676",
  appId: "1:267693388676:web:1f2c7cd4f41cd5bc3423d1"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app) ;

export {db}
