const assertArraysEqual = (array1, array2) => {
  let result;
  if (array1.length !== array2.length) result = false;
  array1.forEach((el,index) => {
    if (result !== false) {
      result = el === array2[index];
    }
  });

  const message = result ? `✅✅✅ ${array1} === ${array2}` : `🛑🛑🛑 ${array1} !== ${array2}`;
  console.log(message);
};

assertArraysEqual([1, 2, 3], [1, 2]);