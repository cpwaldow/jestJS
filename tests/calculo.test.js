const { sum, sub, div, mult } = require('../src/calculo.js');

describe('Testar o arquivo com os 4 principais operadores', () => {
  it('soma', () => {
    expect(sum(1, 2)).toBe(3);
  });
  it('subtração', () => {
    expect(sub(2, 1)).toBe(1);
  });
  it('divisão', () => {
    expect(div(10, 2)).toBe(5);
  });
  it('multiplicação', () => {
    expect(mult(5, 2)).toBe(10);
  });
});
