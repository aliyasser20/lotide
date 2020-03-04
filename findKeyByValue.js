const assertEqual = (actual, expected) => {
  const message = actual === expected ? `✅✅✅ ${actual} === ${expected}` : `🛑🛑🛑 ${actual} !== ${expected}`;
  console.log(message);
};

const findKeyByValue = (object, valueInput) => {

  let result;

  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      object[key] === valueInput ? result = key : null;
    }
  }

  return result;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);