const { arrayCars, arrayNumbers, } = require("./data");

sortCars = () => {
  return arrayCars.sort();
}

sortNumbers = () => {
  return arrayNumbers.sort((a, b) => a - b);
}

module.exports = { sortCars, sortNumbers}