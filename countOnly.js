const assertEqual = (actual, expected) => {
  const message = actual === expected ? `✅✅✅ ${actual} === ${expected}` : `🛑🛑🛑 ${actual} !== ${expected}`;
  console.log(message);
};

const countOnly = function(allItems, itemsToCount) {
  
  const outputObject = {};

  for (let key in itemsToCount) {
    if (itemsToCount.hasOwnProperty(key)) {
      if (itemsToCount[key] && allItems.includes(key)) {
        outputObject[key] = 0;
        allItems.forEach(item => {
          if (item === key) outputObject[key] += 1;
        });
      }
    }
  }

  return outputObject;
};

module.exports = countOnly;


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);