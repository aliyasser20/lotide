const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) return false;
  let result;

  array1.forEach((el,index) => {
    if (result !== false) {
      result = el === array2[index];
    }
  });
  if (array1.length === array2.length && array1.length === 0) result = true;
  return result;
};

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

const ab = { a: {new: 5, old: 8}, b: "2", c: [45, 89, "yes"] };
const ba = { c: [45, 89, "yes"], b: "2", a: {new: 5, old: 8} };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };


// console.log(eqObjects(ab, ba)); // => true
// console.log(eqObjects(ab, abc)); // => false
// console.log(eqObjects(cd, dc)); // => true
// console.log(eqObjects(cd, cd2)); // => false
// console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));// => true
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));// => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: null, b: 2 })); // => false
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false