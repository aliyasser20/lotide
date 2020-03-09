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

const letterPositions = function(sentence) {
  const results = {};

  const letterArray = sentence.split("");

  letterArray.forEach((letter, index) => {
    !results[letter] ? results[letter] = [] : null;
    results[letter].push(index);
  });

  return results;
};

module.exports = letterPositions;

assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]);

console.log(letterPositions("javascript"));