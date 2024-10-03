import { add } from '../stringCalculator';

test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });
  
  test('should return the number when only one number is provided', () => {
    expect(add("1")).toBe(1);
  });
  
  test('should return sum of two numbers', () => {
    expect(add("1,2")).toBe(3);
  });
  
  test('should handle new lines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
  });
  
  test('should handle custom delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
  });
  
  test('should throw an error when negative numbers are passed', () => {
    expect(() => add("1,-2")).toThrow('Negative numbers not allowed: -2');
  });