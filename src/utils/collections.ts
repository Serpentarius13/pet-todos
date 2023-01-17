import { collection, getFirestore } from "firebase/firestore";

import initFirebase from "./initFirebase";

const app = initFirebase();
const db = getFirestore(app);

export const daysRef = collection(db, "days");
export const todosRef = collection(db, "todos");
export const imagesRef = collection(db, "images");
export const textsRef = collection(db, "texts");
