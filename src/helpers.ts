import { format } from "date-fns";

export const getMinTemp = (temp: number[]) => Math.min(...temp);

export const getMaxTemp = (temp: number[]) => Math.max(...temp);

export const getAverageTemp = (temp: number[]) =>
  (temp.reduce((acc, curr) => acc + curr, 0) / temp.length).toFixed(2);

export const getMedianTemp = (temp: number[]) => {
  const sortedArray = temp.sort((a, b) => a - b);
  if (Math.floor(sortedArray.length / 2) == 0) {
    const middleIndex = Math.floor(sortedArray.length / 2);
    return sortedArray[middleIndex];
  } else {
    const middleIndex = Math.floor(sortedArray.length / 2);
    return (sortedArray[middleIndex] + sortedArray[middleIndex - 1]) / 2;
  }
};

export const formatDate = (date: Date) => format(date, "yyyy-MM-dd");
