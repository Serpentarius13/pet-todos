import { query, getDocs, where } from "firebase/firestore";
import { daysRef, imagesRef, textsRef, todosRef } from "./collections";
import extractData from "./extractData";
import { IDay } from "../types/dataTypes";
import checkSkippedDays from "./checkSkippedDays";

export const getDaysForUser = async (
  userId: string | number | unknown | undefined
): Promise<IDay[]> => {
  const queryStr = query(daysRef, where("authorId", "==", userId));
  const snapshot = await getDocs(queryStr);

  let days: IDay[] = extractData(snapshot);

  if (days.length >= 2)
    days = days.sort((a, b) => {
      return (
        Date.parse(b.date.toLocaleString()) -
        Date.parse(a.date.toLocaleString())
      );
    });

  await checkSkippedDays(days);

  return days;
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
