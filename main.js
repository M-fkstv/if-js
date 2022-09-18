//Переменные
let user = "John Doe";
console.log(user);

const student = "Michael";
console.log(student);

user = student; /* Michael */
console.log(student);

//Примитивы

let test = 1;
test++;
test = test + "1"; /*21, because "1" is a string*/
console.log(test);
test = test - 1; /*20*/
console.log(test);
test = Boolean("test");
/* Eslint "comma-dangle": ["error", "always-multiline"] dont work, fix later*/
console.log(test);
/*true, because not empty string, false if test = Boolean("") */

//Массивы

let result = 1;
const arr = [2, 3, 5, 8];
for (let i = 0; i < arr.length; i++) {
  result = result * arr[i];
}
console.log(result);

console.log("---------------");

const arr1 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr1.length; i++) {
  if (5 < arr1[i] && arr1[i] < 10) {
    console.log(arr1[i]);
  }
}

console.log("---------------");

const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] % 2 === 0) {
    console.log(arr2[i]);
  }
}
console.log("---------------");

const word = "шалаш";

const palindrome = function (str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[str.length - i - 1]) {
      console.log(true);
    } else console.log(false);
  }
};

console.log(word);
palindrome(word);

console.log("---------------");

const x = 100;
const y = 10;

const minNumber = function (n1, n2) {
  if (n1 > n2) {
    return n2;
  }
  return n1;
};

minNumber(x, y);

x > y ? console.log(y) : console.log(x);

const maxNumber = function (n1, n2) {
  if (n1 > n2) {
    console.log(n1);
  } else console.log(n2);
};

maxNumber(x, y);

x > y ? console.log(x) : console.log(y);

console.log("---------------");

const arr3 = [0, 6, 10, 25, 15, 60, 50, 78, 90, 100];

console.log(arr3);
const change0 = function (array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      array[i] = "zero";
    } else if (array[i] === 100) {
      array[i] = array[i] / 100 + "zero" + "zero";
    } else if (array[i] % 10 === 0) {
      array[i] = array[i] / 10 + "zero";
    }
  }
  console.log(array);
};

change0(arr3);
