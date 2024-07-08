import average from "../src/average";

describe('average()', () => {
  it('should return NaN for non-array', () => {
    const tab = 'toto';
    expect(average(tab)).toBeNaN();
  });

  it('should return NaN for non-finite numbers', () => {
    const tab = [1, 2, 'toto'];
    expect(average(tab)).toBeNaN();
  });
  
  it('should return the average of the array', () => {
    const tab = [1, 2, 3];
    expect(average(tab)).toBe(2);
  });
});