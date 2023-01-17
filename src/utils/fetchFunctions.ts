import { query, getDocs, where } from "firebase/firestore";
import { daysRef, imagesRef, textsRef, todosRef } from "./collections";
import extractData from "./extractData";

export const getDaysForUser = async (userId: string | number | unknown | undefined) => {
  const queryStr = query(daysRef, where("authorId", "==", userId));
  const snapshot = await getDocs(queryStr);

  return extractData(snapshot);
};

type TColletionName = "todos" | "images" | "texts";

const assembleQuery = (dayId: number | string, reference: any) => {
  return query(reference, where("dayId", "==", dayId));
};

export const getSomethingForDay = async (
  dayId: string | number,
  collectionName: TColletionName
) => {
  let reference;
  switch (collectionName) {
    case "images":
      reference = imagesRef;
      break;
    case "texts":
      reference = textsRef;
      break;
    case "todos":
      reference = todosRef;
      break;
  }

  const queryStr = assembleQuery(dayId, reference);
  const docs = await getDocs(queryStr);
  return extractData(docs);
};
