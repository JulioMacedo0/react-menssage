import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2X4JeQeI5iz6jHBfNqc8N_gORZoRVGuY",
  authDomain: "react-menssage-fe2aa.firebaseapp.com",
  projectId: "react-menssage-fe2aa",
  storageBucket: "react-menssage-fe2aa.appspot.com",
  messagingSenderId: "1070982287327",
  appId: "1:1070982287327:web:dcc7de2087037e0ae3be6a",
  measurementId: "G-0NWEQ1MYM0",
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
auth.languageCode = "it";

export { auth };
