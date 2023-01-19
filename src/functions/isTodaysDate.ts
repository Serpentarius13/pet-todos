//@ts-nocheck
export default (date: string | undefined | null | Date) => {
  if (date === null || date === undefined) return;
  const today = new Date();

  date = new Date(date);

  if (
    today.getFullYear() === date.getFullYear() &&
    today.getMonth() === date.getMonth() &&
    today.getDate() === date.getDate()
  ) {
    return true;
  }

  return false;
};
