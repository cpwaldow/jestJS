const evenOrOdd = (number) => {
  if (!number) {
    return 'É necessário informar um número!';
  }
  if (number % 2 === 0) {
    return 'O número é par';
  }
  return 'O número é ímpar';
};

module.exports = evenOrOdd;
