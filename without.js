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

const without = (inputArray, removeArray) => {
  let correctArray = [];

  inputArray.forEach(el => {
    const ifFoundIndex = removeArray.indexOf(el);
    if (ifFoundIndex < 0) correctArray.push(el);
  });

  return correctArray;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["1", "2", "3"], ["1", 2, 3]), ["2", "3"]);

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function

assertArraysEqual(words, ["hello", "world", "lighthouse"]);