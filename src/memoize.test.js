import memoize from './memoize';
import * as sumModule from './sum';
import * as times10Module from './times10';

describe('memoize', () => {
  it('should call the original function only once with the same arguments', () => {
    const sum = jest.spyOn(sumModule, 'default');
    const memoizedSum = memoize(sum);
    
    expect(sum).toHaveBeenCalledTimes(0);
    memoizedSum(4, 6);
    expect(sum).toHaveBeenCalledTimes(1);
    memoizedSum(4, 6);
    expect(sum).toHaveBeenCalledTimes(1);
    memoizedSum(4, 7);
    expect(sum).toHaveBeenCalledTimes(2);
    memoizedSum(4, 7);
    expect(sum).toHaveBeenCalledTimes(2);

    const times10 = jest.spyOn(times10Module, 'default');
    const memoizedTimes10 = memoize(times10);

    expect(times10).toHaveBeenCalledTimes(0);
    memoizedTimes10(2)
    expect(times10).toHaveBeenCalledTimes(1);
    memoizedTimes10(2)
    expect(times10).toHaveBeenCalledTimes(1);
  });
});
