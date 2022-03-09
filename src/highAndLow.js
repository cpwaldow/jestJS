const highAndLow = (array) => {
  if (array.length === 0) {
    return undefined;
  }
  let newArray = [];
  for (const number of array) {
    if (typeof number !== 'number') {
      return undefined;
    }
    newArray.push(number);
  }
  let orderArray = newArray.sort((a, b) => a - b);
  return [orderArray[0], orderArray[orderArray.length - 1]];
};

module.exports = highAndLow;
