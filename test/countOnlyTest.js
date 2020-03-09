const assert = require("chai").assert;
const {countOnly}   = require("../index");

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe("#countOnly", () => {
  it("returns 1", () => {
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true })["Jason"];
    const expected = 1;
    assert.strictEqual(result, expected);
  });
  it("returns undefined", () => {
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true })["Karima"];
    const expected = undefined;
    assert.strictEqual(result, expected);
  });
  it("returns 2", () => {
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true })["Fang"];
    const expected = 2;
    assert.strictEqual(result, expected);
  });
});