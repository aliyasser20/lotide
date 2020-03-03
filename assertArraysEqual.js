const assertArraysEqual = (array1, array2) => {
  if (array1.length !== array2.length) return false;
  let result;
  array1.forEach((el,index) => {
    if (result !== false) {
      result = el === array2[index];
    }
  });

  const message = result ? `✅✅✅ ${array1} === ${array2}` : `🛑🛑🛑 ${array1} !== ${array2}`;
  console.log(message);
};

assertArraysEqual([1, 2, 3], [3, 2, 1]);