const typeOfArg = require('../src/typeOfArg.js');

describe('teste se o tipo do argumento está correto', () => {
  it('Recebe `1` como parâmetro, retorna "number"', () => {
    expect(typeOfArg(1)).toBe('number');
  });

  it('Recebe `false` como parâmetro, retorna "boolean"', () => {
    expect(typeOfArg(false)).toBe('boolean');
  });

  it('Recebe `{}` como parâmetro, retorna "object"', () => {
    expect(typeOfArg({})).toBe('object');
  });

  it('Recebe `null` como parâmetro, retorna "object"', () => {
    expect(typeOfArg(null)).toBe('object');
  });

  it('Recebe `"text"` como parâmetro, retorna "string"', () => {
    expect(typeOfArg('text')).toBe('string');
  });

  it('Recebe `[1,2,3,4,5,6]` como parâmetro, retorna "object"', () => {
    expect(typeOfArg([1, 2, 3, 4, 5, 6])).toBe('object');
  });
});
