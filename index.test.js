const arrayPacking = require("./arrayPacking.js")
const binarySwap = require("./binarySwap.js")
const breakChocolate = require("./breakChocolate.js")
const cyclicString = require("./cyclicString.js")
const dnaCompliment = require("./dnaCompliment.js")
const lookAndSay = require("./lookAndSay.js")
const groupCounting = require("./groupCounting.js")


test("should find cyclic string length", function() {

  expect(cyclicString.solution1("cabca")).toBe(3);
  expect(cyclicString.solution2("cabca")).toBe(3);
  expect(cyclicString.solution1("abaca")).toBe(4);
  expect(cyclicString.solution2("abaca")).toBe(4);

})
