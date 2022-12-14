import { aggregateArrayIntoChunks } from '../aggregate-array-into-chunks';

describe('aggregateArrayIntoChunks function test suite', () => {
  test('Short string', () => {
    const input = '123456'.split('');

    const output = aggregateArrayIntoChunks<string>(input)
      .every((el) => el.length <= 7 && el.length >= 4);

    const expectedOutput = true;

    expect(output)
      .toBe(expectedOutput);
  });

  test('Long string', () => {
    const input = 'Yqdzrxg2JzpBzsZQQGMSMyxsIjYRUp0Xl8BuRSyHeDEh3ODKggeHnyMlxz66AIhBm3lsDV7WUmmOljOMDU3tpN6FolR9J2o5A1LEVDWFpG2IvO2ipoouQtJtuWyyM3K5cM2Ne3qU0MXF67xZ9zRDhwqdvaxbYaSn95d9fz43iOGw3SsXZNdCk8lA5J04Wm0zqVLY51C1mfjLUGzAPjTR95GnkzPurITIoFcCZr3wTOl6AUXnK7CusCSH864wXajdWeLQwDC0ewjQ996ljzv7WebR2uxuAKLdkViUqann6YJogAq7DHdp6Gz8RIUDdXfff0Pcx0wpYPaqkDkK7mB8wqQnx1hcTjfSztvz5KROtvk3x8yvXwtpTQpHG6MbyD6O3aNMS7EmKM41nXa6e8eqfb7NntjChn7oqhjejzH3w9Qp9Img7l8VAIH66w1Alpb0kIWsPozl3kP3CcSTrLHrmdSLymNibz3Qytx0tPvCkyf2xLUetEWwvf8D5NToiIzgB4j8eudF29XmBbECoEEidkEbWCjNPfirVCJ8bCIM72Rtyz4QJNzYfFthNazCjJT3OCDdirwRT8Wh0drgRAY0jkZhjO8BHKw8XKTD1uZjgqlPNZN5Ti4nO7saytdBh11nrIeFGUct1agAiUrWpzjccq7Fro8P8LwD8tyxWa1RSsiKH2uYD66cbFneIDsvY55XeizxgEbi7sKFc1xPpSyun7NggEJ1QxkV1KHmDJgVq0LJWhrvAqcnIqR0Gn2PYDNZROhYBd4EUEO2tzq3b8OZ0RSR4iUcei9oSvg2wbJ0PqUPC4183kXix4ORUlkYrUTTaVEFYOWPypDP26izycpQpZBcSgM0vjaIHjTxMuuUItw7fXrnOCSnYrEcXUmeGwa67KQvj5HhCLTfCtvVtDICRYZUIpxSu9zw4kWAL4thI4C5xwOoozuqRncVvvlSFUosDEx1VeJix5uSPH7oIA8ai1SLIJvsZKAJ3xlnO5cU'.split(
      '',
    );

    const output = aggregateArrayIntoChunks<string>(input)
      .every((el) => el.length <= 7 && el.length >= 4);

    const expectedOutput = true;

    expect(output)
      .toBe(expectedOutput);
  });

  test('Alphabet', () => {
    const input = 'abcdefghijklmnoprstuwxyz'.split('');

    const output = aggregateArrayIntoChunks<string>(input)
      .every((el) => el.length <= 7 && el.length >= 4);

    const expectedOutput = true;

    expect(output)
      .toBe(expectedOutput);
  });

  test('Too short array as the input', () => {
    const input = [1, 2, 3];

    const output = () => aggregateArrayIntoChunks<number>(input);

    const expectedOutput = Error('The input array cannot have less than 4 elements.');

    expect(output)
      .toThrow(expectedOutput);
  });
});
