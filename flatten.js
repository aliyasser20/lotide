const flatten = (inputArray) => {
  const outputArea = [];
  inputArray.forEach(el => {
    if (Array.isArray(el)) {
      outputArea.push(...el);
    } else {
      outputArea.push(el);
    }
  });
  return outputArea;
};

module.exports = flatten;

