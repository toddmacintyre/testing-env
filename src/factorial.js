const factorial = (n) => {
  if (n === 1 || n === 2) {
    return n;
  }
  let result = n;
  for (let i = n - 1; i > 1; i--) {
    result = result * i;
  }
  return result;
};

const memoizedFactorial = (function() {
  const cached = {};
  return (n, spy = () => {}) => {
    if (n === 1 || n === 2) {
      return n;
    }
    let result = n;
    if (cached[n]) {
      spy();
      return cached[n];
    }
    for (let i = n - 1; i > 1; i--) {
      if (cached[i]) {
        result = result * cached[i];
        spy();
        break;
      }
      result = result * i;
    }
    cached[n] = result;
    return result;
  };
})();

export {
  factorial,
  memoizedFactorial,
};
