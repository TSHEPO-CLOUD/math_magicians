import calculator from "../../logic/calculator";

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
 
