const nota = (nota1, nota2, nota3, nota4) => {
  let notaFinal;

  if (nota1 && nota2 && nota3 && nota4) {
    notaFinal = (nota1 + nota2 + nota3 + nota4) / 4;
  } else if (nota1 && nota2 && nota3 && !nota4) {
    notaFinal = (nota1 + nota2 + nota3) / 4;
  } else if (nota1 && nota2 && !nota3 && !nota4) {
    notaFinal = (nota1 + nota2) / 4;
  } else {
    notaFinal = nota1 / 4;
  }

  if (notaFinal < 7) {
    return `Você foi reprovado, sua nota final foi: ${notaFinal}!`;
  }
  return `Parabéns, você foi aprovado! Sua nota final foi: ${notaFinal}!`;
};

console.log(nota(10));

module.exports = nota;
