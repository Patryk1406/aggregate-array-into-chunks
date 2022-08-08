import { generateRandomNumberInRange } from './utils/generate-random-number-in-range';

export const aggregateArrayIntoChunks = <T>(array: T[]): T[][] => {
  if (array.length < 4) throw new Error('The input array cannot have less than 4 elements.');
  const copy = array.slice();
  const returnedArray: T[][] = [];
  while (copy.length > 7) {
    let nextChunkLength = generateRandomNumberInRange(4, 7);
    if (copy.length - nextChunkLength < 4) {
      nextChunkLength = generateRandomNumberInRange(4, copy.length - 4);
    }
    returnedArray.push(copy.splice(0, nextChunkLength));
  }
  returnedArray.push(copy);
  return returnedArray;
};
