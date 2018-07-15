import {factorial, memoizedFactorial} from './factorial';

describe('factorial', () => {
  it('should return the factorial result of a given number', () => {
    expect(memoizedFactorial(1)).toEqual(1);
    expect(memoizedFactorial(2)).toEqual(2);
    expect(memoizedFactorial(3)).toEqual(6);
    expect(memoizedFactorial(5)).toEqual(120);
    expect(memoizedFactorial(17)).toEqual(355687428096000);
  });
  it('memoized and nonmemoized functions should return the same result', () => {
    expect(memoizedFactorial(3)).toEqual(factorial(3));
    expect(memoizedFactorial(5)).toEqual(factorial(5));
  });
  it('should reference previously cached results', () => {
    jest.resetModules();
    const { memoizedFactorial } = require('./factorial');
    const spy = jest.fn();

    expect(spy.mock.calls.length).toBe(0);
    memoizedFactorial(9, spy);
    expect(spy.mock.calls.length).toBe(0);
    memoizedFactorial(9, spy);
    expect(spy.mock.calls.length).toBe(1);
  });
});
