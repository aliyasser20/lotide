const assertEqual = (actual, expected) => {
  const message = actual === expected ? `✅✅✅ ${actual} === ${expected}` : `🛑🛑🛑 ${actual} !== ${expected}`;
  console.log(message);
};

const findKey = (object, callback) => {
  let foundKey;
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      if (callback(object[key])) {
        foundKey = key;
        break;
      }
    }
  }
  return foundKey;
};

const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(result1, "noma");