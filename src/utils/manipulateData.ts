import {
  query,
  getDocs,
  where,
  updateDoc,
  getDoc,
  addDoc,
} from "firebase/firestore";
import { daysRef, imagesRef, textsRef, todosRef } from "./collections";
import extractData from "./extractData";
import { IDay } from "../types/dataTypes";
import { getCurrentUser, useCurrentUser } from "vuefire";

export const addSkippedDay = async (date: string | Date) => {
  try {
    const user = await getCurrentUser();
    const newDayModel = {
      date,
      isSkipped: true,
      authorId: user?.uid || "1",
    };

    await addDoc(daysRef, newDayModel);
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};
