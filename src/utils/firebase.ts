import { browserLocalPersistence, getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import hashGenerator from "@/functions/hashGenerator";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import initFirebase from "./initFirebase";
import { daysRef, textsRef } from "./collections";
import extractData from "./extractData";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// ... other firebase imports

export const firebaseApp = initFirebase();
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

const storage = getStorage(firebaseApp);
export const uploadFileWithLink = async (file: File) => {
  const fileRef = ref(storage, file.name + hashGenerator(16));

  await uploadBytes(fileRef, file);
  const url = await getDownloadURL(fileRef);
  return url;
};
