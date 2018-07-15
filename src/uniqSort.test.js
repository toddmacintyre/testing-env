import uniqSort from './uniqSort';

describe('uniqSort', () => {
  it('should return an array with no duplicated values', () => {
    const input1 = [1,5,2,1];
    const output1 = [1,2,5];
    const input2 = [4,2,2,3,2,2,2]
    const output2 = [2,3,4];
    
    expect(uniqSort(input1)).toEqual(output1);
    expect(uniqSort(input2)).toEqual(output2);
  });
});
