import { initializeApp } from "firebase/app";
import { browserLocalPersistence, getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// ... other firebase imports

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyBuaiOMSkY822JzaVJn9iw1gY5sUdNW0ww",
  authDomain: "vue-diary-76901.firebaseapp.com",
  projectId: "vue-diary-76901",
  storageBucket: "vue-diary-76901.appspot.com",
  messagingSenderId: "59731823840",
  appId: "1:59731823840:web:e79d15624cd191a33a9485",
});

// used for the firestore refs
const db = getFirestore(firebaseApp);

// here we can export reusable database references
export const todosRef = collection(db, "todos");

const auth = getAuth(firebaseApp);

export const register = async (email: string, password: string) => {
  auth.setPersistence(browserLocalPersistence);

  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  return user;
};

export const login = async (email: string, password: string) => {
  auth.setPersistence(browserLocalPersistence);

  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
};
