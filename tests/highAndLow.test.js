const highAndLow = require('../src/highAndLow.js');

describe('Retornar o maior e o menor item de um array nunmérico', () => {
  it('Retorna undefined caso o array seja vazio', () => {
    expect(highAndLow([])).toBeUndefined();
  });
  it('Retorna undefined caso algum item do array não seja um número', () => {
    expect(highAndLow([5, 4, 8, '8', 6])).toBeUndefined();
    expect(highAndLow([5, 4, 8, 6, 'a'])).toBeUndefined();
    expect(highAndLow([5, 4, 8, 6, { name: 'carlos' }])).toBeUndefined();
    expect(highAndLow([5, ['item1', 'item2'], 8, 6])).toBeUndefined();
  });
  it('Retorna um array contendo o menor e maior número da array passada como parâmetro', () => {
    expect(highAndLow([9, 8, 2, 3, 1, 6, 4, 7, 5, 0, 15])).toEqual([0, 15]);
  });
});
