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

const takeUntil = (array, callback) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) break;
    newArray.push(array[i]);
  }
  return newArray;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results1 = takeUntil(data1, x => x < 0);
const results2 = takeUntil(data2, x => x === ",");

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ "I've", "been", "to", "Hollywood" ]);