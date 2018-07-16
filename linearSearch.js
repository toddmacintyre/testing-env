/**
 * 
 * @param {Object[]} list 
 * @param {Object} item 
 * @returns {Number} The last occuring matching item in the list. -1 if not found.
 */
const linearSearch = (list, item) => {
  return list.reduce((acc, val, ind) => {
    if (val === item) {
      return ind;
    }
    return acc;
  }, -1);
};

export default linearSearch;
