const assertEqual = (actual, expected) => {
  const message = actual === expected ? `✅✅✅ ${actual} === ${expected}` : `🛑🛑🛑 ${actual} !== ${expected}`;
  console.log(message);
};

module.exports = assertEqual;