import calculator from '../../logic/calculator';

describe('calculator functionality ', () => {
  let data = {};
  it('should return the sum of two numbers', () => {
    data = { total: 4, next: 3, operation: '+' };
    const { total } = calculator(data, '=');
    expect(total).toBe('7');
  });
  it('should return the sum of two numbers', () => {
    data = { total: 4.3, next: 2, operation: '+' };
    const { total } = calculator(data, '=');
    expect(total).toBe('6.3');
  });
  it('should return the difference of two numbers', () => {
    data = { total: 4, next: 2, operation: '-' };
    const { total } = calculator(data, '=');
    expect(total).toBe('2');
  });
  it('should return the product of two numbers', () => {
    data = { total: 4, next: 2, operation: 'x' };
    const { total } = calculator(data, '=');
    expect(total).toBe('8');
  });
  it('should return the quotient of two numbers', () => {
    data = { total: 4, next: 2, operation: '÷' };
    const { total } = calculator(data, '=');
    expect(total).toBe('2');
  });
  it('should return the rest of two numbers', () => {
    data = { total: 4, next: 2, operation: '%' };
    const { total } = calculator(data, '=');
    expect(total).toBe('0');
  });
  it('should return the value to 0', () => {
    data = { total: 4, next: 2, operation: 'x' };
    const result = calculator(data, 'AC');
    expect(result).toBe({ total: null, next: null, operation: null });
  });
});
