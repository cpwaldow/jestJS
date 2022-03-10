const nota = require('../src/nota.js');

describe('Retornar se a pessoa foi ou não aprovada', () => {
  // Aprovando a pessoa com as 4 notas
  it('A pessoa estudante enviou as 4 atividades e foi aprovada', () => {
    expect(nota(10, 10, 10, 10)).toBe(
      'Parabéns, você foi aprovado! Sua nota final foi: 10!',
    );
    expect(nota(10, 4, 9, 6)).toBe(
      'Parabéns, você foi aprovado! Sua nota final foi: 7.25!',
    );
  });

  // Reprovando a pessoa com as 4 notas
  it('A pessoa estudante enviou as 4 atividades e foi reprovada', () => {
    expect(nota(1, 1, 1, 1)).toBe('Você foi reprovado, sua nota final foi: 1!');
    expect(nota(7, 5, 6, 8)).toBe(
      'Você foi reprovado, sua nota final foi: 6.5!',
    );
  });

  // Aprovando a pessoa com 3 notas
  it('A pessoa estudante enviou pelo menos 3 atividades e foi aprovada', () => {
    expect(nota(9, 9, 10)).toBe(
      'Parabéns, você foi aprovado! Sua nota final foi: 7!',
    );
    expect(nota(9, 10, 10)).toBe(
      'Parabéns, você foi aprovado! Sua nota final foi: 7.25!',
    );
    expect(nota(10, 10, 10)).toBe(
      'Parabéns, você foi aprovado! Sua nota final foi: 7.5!',
    );
  });

  // Reprovando a pessoa com 3 notas
  it('A pessoa estudante enviou 3 atividades e foi reprovada', () => {
    expect(nota(9, 9, 9)).toBe('Você foi reprovado, sua nota final foi: 6.75!');
  });

  // Reprovando a pessoa com 2 notas
  it('A pessoa estudante enviou 2 atividades e foi reprovada', () => {
    expect(nota(9, 9)).toBe('Você foi reprovado, sua nota final foi: 4.5!');
  });

  // Reprovando a pessoa com 1 nota
  it('A pessoa estudante enviou 1 atividades e foi reprovada', () => {
    expect(nota(10)).toBe('Você foi reprovado, sua nota final foi: 2.5!');
  });
});
