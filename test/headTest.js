const assert = require("chai").assert;
const {head}   = require("../index");

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(["5"]), "5");
  });
  it("does not return 'w'", () => {
    assert.notEqual(head(["o", 8, "f"]), "w");
  });
  it("returns 'w'", () => {
    assert.strictEqual(head(["w", 8, "f"]), "w");
  });
});