const memoize = (func) => {
  const cached = new Map();
  return (...args) => {
    const argsString = JSON.stringify(args);
    if (cached.has(argsString)) {
      return cached.get(argsString);
    }
    const result = func(...args);
    cached.set(argsString, result);
    return result;
  };
};

export default memoize;
