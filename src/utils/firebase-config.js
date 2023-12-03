// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDrN8S87ks1BrPHgUlf5d_3DqsKPV2QdEM",
  authDomain: "netflix-project-8c191.firebaseapp.com",
  projectId: "netflix-project-8c191",
  storageBucket: "netflix-project-8c191.appspot.com",
  messagingSenderId: "23554811286",
  appId: "1:23554811286:web:a310414bc3a490242b69b7",
  measurementId: "G-DJ8D8HPMN9"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)