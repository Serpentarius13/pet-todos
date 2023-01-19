import getDate from "@/functions/getDate";
import { addSkippedDay } from "./manipulateData";
import { IDay } from "@/types/dataTypes";

export default async (days: IDay[]) => {
  if (days.length == 0) return;
  const refinedArray = days.map((day) => getDate(day.date));

  const firstDate = Date.parse(days[0].date.toLocaleString());
  const today = Date.now();
  const diff = today - firstDate;
  if (diff < 0) return;
  const diffDate = new Date(diff);
  const numericDiff = diffDate.getDate();

  const oneDayInMS = 1000 * 60 * 60 * 24;

  let changingDate = firstDate;

  for (let i = 0; i <= numericDiff - 1; i++) {
    const nextDate = changingDate + oneDayInMS;
    if (nextDate > today) return;
    const isoDate = new Date(nextDate).toISOString();
    const dated = getDate(isoDate);

    const condition = !refinedArray.includes(dated);

    if (condition) {
      await addSkippedDay(new Date(nextDate).toUTCString());
    }

    changingDate += oneDayInMS;
  }
};
