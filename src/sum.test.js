import sum from './sum';

describe('Math is hard', () => {
  const obj = {a: 3, b: 4, c: 5};
  const {b: answer, ...extractedObj} = obj;
  it('should perform a basic summation', () => {
    expect(sum(1, 3)).toEqual(answer);
  });
  it('should not have the answer in the extracted object', () => {
    expect(extractedObj.b).toBeUndefined();
  });
});