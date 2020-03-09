const eqArrays = require("./eqArrays");

const eqObjects = (objectOne, objectTwo) => {
  const keysOne = Object.keys(objectOne);
  const keysTwo = Object.keys(objectTwo);
  
  let result = keysOne.length === keysTwo.length;

  for (let key in objectOne) {
    if (objectOne.hasOwnProperty(key)) {

      if (objectTwo[key] !== objectOne[key]) result = false;

      if (Array.isArray(objectTwo[key]) && Array.isArray(objectOne[key])) {
        result = eqArrays(objectTwo[key], objectOne[key]);
      } else if (typeof(objectTwo[key]) === "object" && typeof(objectOne[key]) === "object" && objectOne[key] !== null && objectTwo[key] !== null) {
        result = eqObjects(objectTwo[key], objectOne[key]);
      }
    }
  }
  return result;
};

module.exports = eqObjects;
