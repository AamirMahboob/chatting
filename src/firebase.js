 import { initializeApp } from "firebase/app";
 import { getAuth } from "firebase/auth";
 import {getFirestore} from 'firebase/firestore'

 const firebaseConfig = {
  apiKey: "AIzaSyAWCuaQ4NpcQlp0VU_Xd77k-w_AmGuFrw4",
  authDomain: "chat-app-yt-18f12.firebaseapp.com",
  projectId: "chat-app-yt-18f12",
  storageBucket: "chat-app-yt-18f12.appspot.com",
  messagingSenderId: "329900230061",
  appId: "1:329900230061:web:bf67b50179d96823d5cd24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)