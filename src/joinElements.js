const joinElementsRecursive = (array, joinString) => {
  const recurse = (index, resultSoFar) => {
    resultSoFar += array[index];
    if(index === array.length - 1) {
      return resultSoFar;
    } else {
      return recurse(index + 1, resultSoFar + joinString);
    }
  }
  return recurse(0, '');
}

const joinElementsIterative = (array, joinString) => {
  return array.reduce((acc, val, ind, arr) => {
    if (ind === arr.length - 1) {
      return acc + val;
    }
    return acc + val + joinString;
  }, '');
};

export {
  joinElementsIterative,
  joinElementsRecursive,
};
