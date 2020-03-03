const assertArraysEqual = (array1, array2) => {
  let result;
  if (array1.length !== array2.length) result = false;
  
  array1.forEach((el,index) => {
    if (result !== false) {
      result = el === array2[index];
    }
  });
  
  if (array1.length === array2.length && array1.length === 0) result = true;
  
  const message = result ? `✅✅✅ ${array1} === ${array2}` : `🛑🛑🛑 ${array1} !== ${array2}`;
  console.log(message);
};

const middle = (inputArray) => {

  const middleIndex = Math.floor(inputArray.length / 2);

  if (inputArray.length < 3) return [];
  if (inputArray.length % 2 === 0) return [inputArray[middleIndex - 1],inputArray[middleIndex]];
  return [inputArray[middleIndex]];
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);