import memoize from './memoize';
const sumModule = require('./sum');

const spy = jest.spyOn(sumModule, 'default');

describe('memoize', () => {
  it('should call the original function only once with the same arguments', () => {
    const memoizedSum = memoize(sumModule.default);
    
    expect(spy).toHaveBeenCalledTimes(0);
    memoizedSum(4, 6);
    expect(spy).toHaveBeenCalledTimes(1);

    memoizedSum(4, 6);
    expect(spy).toHaveBeenCalledTimes(1);
    
    memoizedSum(4, 7);
    expect(spy).toHaveBeenCalledTimes(2);
    
    memoizedSum(4, 7);
    expect(spy).toHaveBeenCalledTimes(2);
  });
});
