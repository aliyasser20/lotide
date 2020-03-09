const assert = require("chai").assert;
const {letterPositions}   = require("../index");

describe("#letterPositions", () => {
  it("returns [3, 5, 15, 18]", () => {
    const result = letterPositions("lighthouse in the house").h;
    const expected = [3, 5, 15, 18];
    assert.deepEqual(result, expected);
  });
  it("returns [9, 16, 22]", () => {
    const result = letterPositions("lighthouse in the house").e;
    const expected = [9, 16, 22];
    assert.deepEqual(result, expected);
  });
});