const assert = require("chai").assert;
const {eqObjects}   = require("../index");

const ab = { a: {new: 5, old: 8}, b: "2", c: [45, 89, "yes"] };
const ba = { c: [45, 89, "yes"], b: "2", a: {new: 5, old: 8} };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

describe("#eqObjects", () => {
  it("returns true", () => {
    const result = eqObjects(ab, ba);
    assert.isTrue(result);
  });
  it("returns false", () => {
    const result = eqObjects(ab, abc);
    assert.isFalse(result);
  });
  it("returns true", () => {
    const result = eqObjects(cd, dc);
    assert.isTrue(result);
  });
  it("returns false", () => {
    const result = eqObjects(cd, cd2);
    assert.isFalse(result);
  });
  it("returns true", () => {
    const result = eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 });
    assert.isTrue(result);
  });
  it("returns false", () => {
    const result = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 });
    assert.isFalse(result);
  });
  it("returns false", () => {
    const result = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: null, b: 2 });
    assert.isFalse(result);
  });
  it("returns false", () => {
    const result = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 });
    assert.isFalse(result);
  });
});




