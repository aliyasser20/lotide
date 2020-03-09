const assert = require("chai").assert;
const {eqArrays} = require("../index");

describe("#findKeyByValue", () => {
  it("returns true", () => {
    const result = eqArrays([1, 2, 3], [1, 2, 3]);
    assert.isTrue(result);
  });
  it("returns false", () => {
    const result = eqArrays([1, 2, 3], [3, 2, 1]);
    assert.isFalse(result);
  });
  it("returns true", () => {
    const result = eqArrays(["1", "2", "3"], ["1", "2", "3"]);
    assert.isTrue(result);
  });
  it("returns true", () => {
    const result = eqArrays([[2, 3], [4]], [[2, 3], [4]]);
    assert.isTrue(result);
  });
  it("returns true", () => {
    const result = eqArrays([[2, 3], [4 , [10, [12, 16]]]], [[2, 3], [4 , [10, [12, 16]]]]);
    assert.isTrue(result);
  });
  it("returns false", () => {
    const result = eqArrays(["1", "2", "3"], ["1", "2", 3]);
    assert.isFalse(result);
  });
  it("returns false", () => {
    const result = eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]);
    assert.isFalse(result);
  });
  it("returns false", () => {
    const result = eqArrays([[2, 3], [4]], [[2, 3], 4]);
    assert.isFalse(result);
  });
});
