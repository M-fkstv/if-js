import { sum } from "../src/scripts/module";
// import { colors } from "./module.js";
// import { getColor } from "./module.js";

// import { palindrome1 } from "../src/scripts/Lessons";

test("пять плюс два равно семь", () => {
  expect(sum(5)(2)).toBe(7);
});
