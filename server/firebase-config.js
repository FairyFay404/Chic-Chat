import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDwU6gxNeYBiSxIr86J0I6AgMnPCA2MDxY",
    authDomain: "chic-chat-235b1.firebaseapp.com",
    databaseURL: "https://chic-chat-235b1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "chic-chat-235b1",
    storageBucket: "chic-chat-235b1.appspot.com",
    messagingSenderId: "467299531667",
    appId: "1:467299531667:web:513a40e3392f794896c666",
    measurementId: "G-6RC7HLWBCN"
  };

const app = initializeApp(firebaseConfig);

export const database = getFirestore(app)