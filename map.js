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

const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const newArray = [];
  array.forEach(el => newArray.push(callback(el)));
  return newArray;
};

module.exports = map;

const results1 = map(words, word => word[0]);
const results2 = map(words, (el) => el.length);

assertArraysEqual(results1,[ "g", "c", "t", "m", "t" ]);
assertArraysEqual(results2,[ 6, 7, 2, 5, 3 ]);
