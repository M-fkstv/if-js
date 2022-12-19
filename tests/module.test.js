// import { sum } from "../src/scripts/module.js";
// import { formEl } from "../lesson- 15 Homework/homework";
// import { colors } from "./module.js";
// import { getColor } from "./module.js";

function sum(n1) {
  return function sum(n2) {
    return n1 + n2;
  };
}
test("пять плюс два равно семь", () => {
  expect(sum(5)(2)).toBe(7);
});
