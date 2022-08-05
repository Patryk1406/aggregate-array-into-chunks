import { generateRandomNumberInRange } from './utils/generate-random-number-in-range';

const aggregateArrayIntoChunks = <T>(array: T[]): T[][] => {
  if (array.length < 4) throw new Error('The input array cannot have less than 4 elements.');
  const copy = array.slice();
  const returnedArray: T[][] = [];
  let lengthOfCurrentChunk;
  while (copy.length > 7) {
    lengthOfCurrentChunk = generateRandomNumberInRange(4, 8);
    if (copy.length - lengthOfCurrentChunk < 4) {
      lengthOfCurrentChunk = generateRandomNumberInRange(4, copy.length - 4 + 1);
    }
    returnedArray.push(copy.splice(0, lengthOfCurrentChunk));
  }
  returnedArray.push(copy);
  return returnedArray;
};

const alphabet = 'abcdefghijklmnoprstuwxyz'.split('');

console.log(aggregateArrayIntoChunks(alphabet));
