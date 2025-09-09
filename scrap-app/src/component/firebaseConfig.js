// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyARNijIGjhYMunRhuFiCAEfPJ1GM6AfX2Q",
  authDomain: "scrap-app-df19c.firebaseapp.com",
  projectId: "scrap-app-df19c",
  storageBucket: "scrap-app-df19c.firebasestorage.app",
  messagingSenderId: "741742432314",
  appId: "1:741742432314:web:9b88e0ad84e1794bc2a503",
  measurementId: "G-9P5H4BNQH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);  // ✅ Add this line
