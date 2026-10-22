const pascal = function (n) {
  if (n === 1 || n === 0) return [1];

  const result = [];

  // Only works for n <= 2
  /*
  if (n <= 2) {
    for (let i = n - 1; i >= 0; i--) {
      for (const node of pascal(i)) {
        result.splice(midResult(result.length), 0, node);
      }
    }

    return result;
  }
  */

  const previousResult = pascal(n - 1);
  const previousResultLength = previousResult.length;

  for (let i = 0; i <= previousResultLength - 2; i++) {
    result.push(previousResult[i] + previousResult[i + 1]);
  }

  result.unshift(1);
  result.push(1);

  return result;
};

// Do not edit below this line
module.exports = pascal;
