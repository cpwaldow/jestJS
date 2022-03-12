const drink = (birthYear) => {
  const currentYear = new Date().getFullYear();

  if (currentYear - birthYear > 18) {
    return 'Maior que 18 anos, pode beber';
  }
  return 'Menor que 18 anos, não pode beber';
};

module.exports = drink;
