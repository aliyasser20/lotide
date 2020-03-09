const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) return false;
  let result;
  array1.forEach((el,index) => {
    if (Array.isArray(el)) {
      result = eqArrays(el, array2[index]);
    } else if (result !== false) {
      result = el === array2[index];
    }
  });
  if (array1.length === array2.length && array1.length === 0) result = true;
  return result;
};

module.exports = eqArrays;
