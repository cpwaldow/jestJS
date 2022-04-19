const removeCharacters = require('../src/removeCharacters.js');

describe('A função recebe uma string e um número como parâmetros, remova a quantidade de caractere da string com base no número passado.', () => {
  it('Com os parâmetros "abcdefg" e 3, retorne "defg"', () => {
    expect(removeCharacters('abcdefg', 3)).toBe('defg');
  });

  it('Com os parâmetros "1234" e 2, retorne "34"', () => {
    expect(removeCharacters('1234', 2)).toBe('34');
  });

  it('Com os parâmetros "fgedcba" e 4, retorne "cba"', () => {
    expect(removeCharacters('fgedcba', 4)).toBe('cba');
  });
});
