const assertEqual = (actual, expected) => {
  const message = actual === expected ? `✅✅✅ ${actual} === ${expected}` : `🛑🛑🛑 ${actual} !== ${expected}`;
  console.log(message);
};

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

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);


assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false
assertEqual(eqArrays([[2, 3], [4 , [10, [12, 16]]]], [[2, 3], [4 , [10, [12, 16]]]]), true); // => false