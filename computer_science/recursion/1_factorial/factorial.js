const factorial = function (n) {
  if (!Number.isInteger(n) || n < 0) {
    return undefined;
  }

  return n === 0 ? 1 : n * factorial(n - 1);
};

// Do not edit below this line
module.exports = factorial;
