const assertEqual = (actual, expected) => {
  const message = actual === expected ? `✅✅✅ ${actual} === ${expected}` : `🛑🛑🛑 ${actual} !== ${expected}`;
  console.log(message);
};

const countLetters = (string) => {
  const results = {};

  for (let letter of string) {
    !results[letter] ? results[letter] = 0 : null;
    results[letter] += 1;
  }

  return results;
};

module.exports = countLetters;

assertEqual(countLetters("lighthouse in the house").h, 4);