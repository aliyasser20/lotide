const assert = require("chai").assert;
const {flatten}   = require("../index");

describe("#flatten", () => {
  it("returns [1, 2, 4, 6, 1, 4, 7]", () => {
    const input = [1, 2, 4, [6, 1, 4], 7];
    const expected = [1, 2, 4, 6, 1, 4, 7];
    assert.deepEqual(flatten(input), expected);
  });
  it("returns [1, 2, 3, 4, 5, 6]", () => {
    const input = [1, 2, [3, 4], 5, [6]];
    const expected = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(flatten(input), expected);
  });
});
