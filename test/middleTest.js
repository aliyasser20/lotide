const assert = require("chai").assert;
const middle = require("../middle");

describe("#Middle", () => {
  it("should return empty array", () => {
    const input = [1];
    const expected = [];
    assert.deepEqual(middle(input), expected);
  });
  it("should return empty array", () => {
    const input = [1, 2];
    const expected = [];
    assert.deepEqual(middle(input), expected);
  });
  it("should return [2]", () => {
    const input = [1, 2, 3];
    const expected = [2];
    assert.deepEqual(middle(input), expected);
  });
  it("should return [2, 3]", () => {
    const input = [1, 2, 3, 4];
    const expected = [2, 3];
    assert.deepEqual(middle(input), expected);
  });
  it("should return [3]", () => {
    const input = [1, 2, 3, 4, 5];
    const expected = [3];
    assert.deepEqual(middle(input), expected);
  });
  it("should return [3, 4]", () => {
    const input = [1, 2, 3, 4, 5, 6];
    const expected = [3, 4];
    assert.deepEqual(middle(input), expected);
  });
});