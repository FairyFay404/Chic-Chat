import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBAtpoQhy45kaBAnzwv16LuQdBbhVQj_58",
  authDomain: "chic-chat-f5a56.firebaseapp.com",
  projectId: "chic-chat-f5a56",
  storageBucket: "chic-chat-f5a56.appspot.com",
  messagingSenderId: "542455746483",
  appId: "1:542455746483:web:dd4ffbf7cfc22df5c605c6",
  measurementId: "G-2P71WM8008"
};

const app = initializeApp(firebaseConfig);

export const database = getFirestore(app)

// export const findUser = async 


