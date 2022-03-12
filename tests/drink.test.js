const drink = require('../src/drink.js');

describe('A pessoa é maior que 18 anos e pode beber', () => {
  it('Passe o ano de nascimento e se a pessoa tiver mais de 18 anos, pode beber', () => {
    expect(drink(1997)).toBe('Maior que 18 anos, pode beber');
  });
  it('Passe o ano de nascimento e se a pessoa tiver menos de 18 anos, não pode beber', () => {
    expect(drink(2010)).toBe('Menor que 18 anos, não pode beber');
  });
});
