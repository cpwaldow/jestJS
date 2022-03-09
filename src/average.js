const average = (array) => {
  if (array.length === 0) {
    return undefined;
  }
  let total = 0;
  for (const iterator of array) {
    if (typeof iterator !== 'number') {
      return undefined;
    }
    total += iterator;
  }
  return Math.round(total / array.length);
};

average([10, 6, 9]);

module.exports = average;
