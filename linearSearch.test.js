import linearSearch from './linearSearch';

describe('linearSearch', () => {
  it('should return "undefined if the value does not exist in the list', () => {
    const array = [2,6,7,90,103];
    const expected = 91;
    expect(linearSearch(array, expected)).toEqual(-1);
  });
  it('should return the index where the item is found', () => {
    const array = [2,6,7,90,103];
    const expected = 90;
    expect(linearSearch(array, expected)).toEqual(3);
  });
});
