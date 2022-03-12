const evenOrOdd = require('../src/evenOrOdd.js');

describe('Validar se o número passado no parâmetro é par ou ímpar', () => {
  it('Validar se o número 2 é par', () => {
    expect(evenOrOdd(2)).toBe('O número é par');
    expect(evenOrOdd(4)).toBe('O número é par');
    expect(evenOrOdd(6)).toBe('O número é par');
  });
  it('Validar se o número 5 é impar', () => {
    expect(evenOrOdd(1)).toBe('O número é ímpar');
    expect(evenOrOdd(3)).toBe('O número é ímpar');
    expect(evenOrOdd(5)).toBe('O número é ímpar');
  });
  it('Validar se é passado algum parâmetro para a função', () => {
    expect(evenOrOdd()).toBe('É necessário informar um número!');
  });
});
