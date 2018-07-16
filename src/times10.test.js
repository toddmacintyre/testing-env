import * as times10Module from './times10';

describe('times10', () => {
  it('should multiply the input by 10', () => {
    const times10 = jest.spyOn(times10Module, 'default');
    expect(times10).toHaveBeenCalledTimes(0);
    expect(times10(5)).toEqual(50);
    expect(times10).toHaveBeenCalledTimes(1);
  });
});
