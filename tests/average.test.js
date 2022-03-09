const average = require('../src/average.js');

describe('Encontre a mediana entre valores', () => {
  it('Retorna unefined caso o array seja vazio', () => {
    expect(average([])).toBeUndefined();
  });
  it('Retorna unefined caso o array tenha algum item que não seja um número', () => {
    expect(average([1, 2, 3, 4, 5, 6, '7'])).toBeUndefined();
    expect(average(['zero', 'um', 'dois', 'tres'])).toBeUndefined();
    expect(average([1, 2, [3]])).toBeUndefined();
    expect(average([' '])).toBeUndefined();
  });
  it('Retorna a média dos valores que foram passados na array', () => {
    expect(average([1, 1, 1, 1, 1, 1, 1])).toEqual(1);
    expect(average([1, 2, 3, 4, 5, 6, 7])).toEqual(4);
    expect(average([10, 6, 9])).toBe(8);
  });
});
