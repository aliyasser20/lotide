const middle = (inputArray) => {

  const middleIndex = Math.floor(inputArray.length / 2);

  if (inputArray.length < 3) return [];
  if (inputArray.length % 2 === 0) return [inputArray[middleIndex - 1],inputArray[middleIndex]];
  return [inputArray[middleIndex]];
};

module.exports = middle;
