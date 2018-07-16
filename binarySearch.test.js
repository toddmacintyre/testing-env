import {binarySearchRecursive, binarySearchIterative} from './binarySearch';

describe('Binary Search', () => {
  it('should return the index of the found item', () => {
    const array = [2,3,6,8,10,16,17,27,29,32,48,53,67,77,82,99];
    const item = 17;
    const expected = 6
    expect(binarySearchRecursive(array, item)).toEqual(expected);
    expect(binarySearchIterative(array, item)).toEqual(expected);

    const array2 = [2,3,6,8,10,16,17,27,29,32,48,53,67,77,82,99,124,126,128,131,135,138,152,174];
    const item2 = 2;
    const expected2 = 0
    expect(binarySearchRecursive(array2, item2)).toEqual(expected2);
    expect(binarySearchIterative(array2, item2)).toEqual(expected2);

    const array3 = [2,3,6,8,10,16,17,27,29,32,48,53,67,77,82,99,124,126,128,131,135,138,152,174];
    const item3 = 174;
    const expected3 = array3.length - 1;
    expect(binarySearchRecursive(array3, item3)).toEqual(expected3);
    expect(binarySearchIterative(array3, item3)).toEqual(expected3);
  });
  it('should return -1 if the item is not found', () => {
    const array = [2,3,6,8,10,16,17,27,29,32,48,53,67,77,82,99];
    const item = 18;
    const expected = -1;
    expect(binarySearchRecursive(array, item)).toEqual(expected);
    expect(binarySearchIterative(array, item)).toEqual(expected);
  });
});
