const binarySearch = (list, item, low = 0, high = list.length - 1) => {
  const guessIndex = ~~(low + (high - low) / 2);
  const guessVal = list[guessIndex];
  if (guessVal === item) {
    return guessIndex;
  }
  if (high - low <= 0) {
    return -1;
  }
  if (guessVal < item) {
    return binarySearch(list, item, guessIndex + 1, high);
  }
  if (guessVal > item) {
    return binarySearch(list, item, low, guessIndex - 1);
  }
};

const binarySearchIterative = (list, item) => {
  let result;
  let low = 0;
  let high = list.length - 1;
  while (high - low >= 0) {
    let guessIndex = ~~(low + (high - low) / 2);
    let guessVal = list[guessIndex];
    if (guessVal === item) {
      result = guessIndex;
      break;
    }
    else if (high - low <= 0) {
      result = -1;
      break;
    }
    else if (guessVal < item) {
      low = guessIndex + 1;
    }
    else if (guessVal > item) {
      high = guessIndex - 1;
    }
  }
  return result;
};

export {
  binarySearch as binarySearchRecursive,
  binarySearchIterative,
};
