import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPy1SMo4nPMxK-mWiKtUegkKL1NTeHKfc",
  authDomain: "uj-pychad.firebaseapp.com",
  databaseURL: "https://uj-pychad-default-rtdb.firebaseio.com",
  projectId: "uj-pychad",
  storageBucket: "uj-pychad.appspot.com",
  messagingSenderId: "937372157157",
  appId: "1:937372157157:web:37e781d7ffc3c8ea75400c"
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const storage = getStorage(app);

firebase.initializeApp(firebaseConfig);
export const dataref = firebase.database();


export const auth = getAuth(app);
export const doPasswordReset = email => auth.sendPasswordResetEmail(email);
export const doPasswordChange = password =>
  auth.currentUser.updatePassword(password);






