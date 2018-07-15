const uniqSort = (array) => {
  const taken = new Map();
  const uniqArray = array.reduce((acc, val) => {
    if (taken.get(val)) {
      return acc;
    }
    taken.set(val, true);
    acc.push(val);
    return acc;
  }, []);
  return uniqArray.sort((a, b) => a - b);
}

export default uniqSort;
