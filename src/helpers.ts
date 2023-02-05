import { format } from "date-fns";

export const getMinNumber = (temp: number[]) => Math.min(...temp).toFixed(1);

export const getMaxNumber = (temp: number[]) => Math.max(...temp).toFixed(1);

export const getAverageNumber = (temp: number[]) =>
  (temp.reduce((acc, curr) => acc + curr, 0) / temp.length).toFixed(1);

export const getMedianNumber = (temp: number[]) => {
  const sortedArray = temp.sort((a, b) => a - b);
  if (Math.floor(sortedArray.length / 2) == 0) {
    const middleIndex = Math.floor(sortedArray.length / 2);
    return sortedArray[middleIndex].toFixed(1);
  } else {
    const middleIndex = Math.floor(sortedArray.length / 2);
    return (
      (sortedArray[middleIndex] + sortedArray[middleIndex - 1]) /
      2
    ).toFixed(1);
  }
};

export const formatDate = (date: Date) => format(date, "yyyy-MM-dd");
