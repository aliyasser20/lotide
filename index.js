const tail = require("./tail");
const head = require("./head");
const middle = require("./middle");
const assertArraysEqual = require("./assertArraysEqual");
const assertEqual = require("./assertEqual");
const eqObjects = require("./eqObjects");
const assertObjectsEqual = require("./assertObjectsEqual");
const countLetters = require("./countLetters");
const countOnly = require("./countOnly");
const eqArrays = require("./eqArrays");
const flatten = require("./flatten");
const letterPositions = require("./letterPositions");
const map = require("./map");
const findKeyByValue = require("./findKeyByValue");
const findKey = require("./findKey");
const takeUntil = require("./takeUntil");
const without = require("./without");

module.exports = {
  head,
  tail,
  middle,
  assertArraysEqual,
  assertEqual,
  eqObjects,
  assertObjectsEqual,
  countLetters,
  countOnly,
  eqArrays,
  flatten,
  letterPositions,
  map,
  findKey,
  findKeyByValue,
  takeUntil,
  without
};