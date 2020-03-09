const assert = require("chai").assert;
const {findKeyByValue}   = require("../index");

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe("#findKeyByValue", () => {
  it("returns [1, 2, 4, 6, 1, 4, 7]", () => {
    const result = findKeyByValue(bestTVShowsByGenre, "The Wire");
    const expected = "drama";
    assert.strictEqual(result, expected);
  });
  it("returns 'sci_fi'", () => {
    const result = findKeyByValue(bestTVShowsByGenre, "The Expanse");
    const expected = "sci_fi";
    assert.strictEqual(result, expected);
  });
  it("returns undefined", () => {
    const result = findKeyByValue(bestTVShowsByGenre, "That '70s Show");
    const expected = undefined;
    assert.strictEqual(result, expected);
  });
});
