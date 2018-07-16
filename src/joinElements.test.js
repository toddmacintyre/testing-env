import {
  joinElementsIterative,
  joinElementsRecursive,
} from './joinElements';

describe('Join Elements function', () => {
  it('should return the same result whether using recursion or iteration', () => {
    const args = [['s','cr','t cod', ' :) :)'], 'e'];
    const expected = 'secret code :) :)';
    expect(joinElementsRecursive(...args)).toEqual(expected);
    expect(joinElementsIterative(...args)).toEqual(expected);
  });
});
