import { aggregateArrayIntoChunks } from '../aggregate-array-into-chunks';
import { longString, shortString } from './data/data';

test('Short string', () => {
  expect(aggregateArrayIntoChunks<string>(shortString)
    .every((el) => el.length <= 7 && el.length >= 4))
    .toBe(true);
});

test('Long string', () => {
  expect(aggregateArrayIntoChunks<string>(longString)
    .every((el) => el.length <= 7 && el.length >= 4))
    .toBe(true);
});

test('Alphabet', () => {
  expect(aggregateArrayIntoChunks<string>(shortString)
    .every((el) => el.length <= 7 && el.length >= 4))
    .toBe(true);
});
