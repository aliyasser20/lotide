const eqArrays = require("./eqArrays");

const assertArraysEqual = (array1, array2) => {
  const message = eqArrays(array1, array2) ? `✅✅✅ [${array1}] === [${array2}]` : `🛑🛑🛑 [${array1}] !== [${array2}]`;
  console.log(message);
};

module.exports = assertArraysEqual;