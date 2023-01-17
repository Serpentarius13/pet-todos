//@ts-nocheck

export default (docs): any[] => {
  const returnArr = [];
  docs.forEach((doc) => {
    const data = doc.data();

    returnArr.push({ ...data, id: doc.id });
  });
  return returnArr;
};
