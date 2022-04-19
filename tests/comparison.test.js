const comparison = require('../src/comparison.js');

describe('Testa se ambos os argumentos são estritamente iguais', () => {
  it('Retorna false caso os parâmetros sejam 2 e 3', () => {
    expect(comparison(2, 3)).toBeFalsy();
  });
  it('Retorna false caso os parâmetros sejam 1 e "1"', () => {
    expect(comparison(1, '1')).toBeFalsy();
  });
  it('Retorna true caso os parâmetros sejam 3 e 3', () => {
    expect(comparison(3, 3)).toBeTruthy();
  });
  it('Retorna true caso os parâmetros sejam "10" e "10"', () => {
    expect(comparison('10', '10')).toBeTruthy();
  });
});
