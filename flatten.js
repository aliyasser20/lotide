const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) return false;
  let result;
  array1.forEach((el,index) => {
    if (result !== false) {
      result = el === array2[index];
    }
  });
  if (array1.length === array2.length && array1.length === 0) result = true;
  return result;
};

const assertArraysEqual = (array1, array2) => {
  const message = eqArrays(array1, array2) ? `✅✅✅ [${array1}] === [${array2}]` : `🛑🛑🛑 [${array1}] !== [${array2}]`;
  console.log(message);
};

const flatten = (inputArray) => {
  const outputArea = [];
  inputArray.forEach(el => {
    if (Array.isArray(el)) {
      outputArea.push(...el);
    } else {
      outputArea.push(el);
    }
  });
  return outputArea;
};

assertArraysEqual(flatten([1, 2, 4, [6, 1, 4], 7]), [1, 2, 4, 6, 1, 4, 7]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);