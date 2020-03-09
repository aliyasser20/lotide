const assert = require("chai").assert;
const {tail} = require("../index");

describe("#tail", () => {
  it("should not be equal", () => {
    const input = ["o", 8, "f"];
    const expected = "w";
    assert.notEqual(tail(input)[0], expected);
  });
  it("should be equal", () => {
    const input = ["w", "w", "w"];
    const expected = "w";
    assert.strictEqual(tail(input)[0], expected);
  });
  it("should be equal", () => {
    const input = ["w", 8, "w", 5];
    const expected = 8;
    assert.strictEqual(tail(input)[0], expected);
  });
});