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
