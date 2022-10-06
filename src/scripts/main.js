import { sum } from "./module.js";

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
    return n1;
  }
  return n2;
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
  return arr3;
};

change0(arr3);
console.log(arr3);

console.log(sum(5)(2));

const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");

import { colors } from "./module.js";
import { getColor } from "./module.js";

for (let j = 0; j < colors.length; j++) {
  text1.addEventListener("click", getColor());
}
for (let i = 0; i < colors.length; i++) {
  text2.addEventListener("click", getColor());
}
for (let i = 0; i < colors.length; i++) {
  text3.addEventListener("click", getColor());
}

// text1.addEventListener("click", (event) => {
//   event.target.style.color = getColor();
// });

// text2.addEventListener("click", (event) => {
//   event.target.style.color = "magenta";
// });
//
// text3.addEventListener("click", (event) => {
//   event.target.style.color = "magenta";
// });
const re = /(^\d{4})-(\d{2})-(\d{2}$)/g; //Преобразование формата даты

const date = "2020-11-26";

const newDate = date.replace(re, "$3.$2.$1");

console.log(newDate);

const data = [
  {
    country: "Russia",
    city: "Saint Petersburg",
    hotel: "Hotel Leopold",
  },

  {
    country: "Spain",
    city: "Santa Cruz de Tenerife",
    hotel: "Apartment Sunshine",
  },
  {
    country: "Slowakia",
    city: "Vysokie Tatry",
    hotel: "Villa Kunerad",
  },
  {
    country: "Germany",
    city: "Berlin",
    hotel: "Hostel Friendship",
  },
  {
    country: "Indonesia",
    city: "Bali",
    hotel: "Ubud Bali Resort&SPA",
  },
  {
    country: "Netherlands",
    city: "Rotterdam",
    hotel: "King Kong Hostel",
  },
  {
    country: "Marocco",
    city: "Ourika",
    hotel: "Rokoko Hotel",
  },
  {
    country: "Germany",
    city: "Berlin",
    hotel: "Hotel Rehberge Berlin Mitte",
  },
];

const string = "Germany"; //Поиск объектов размещения
const search = function () {
  for (let i = 0; i < data.length; i++) {
    const j = data[i];
    if (data[i].country.includes(string) === true) {
      console.log(j.country, j.city, j.hotel);
    }
    if (data[i].city.includes(string) === true) {
      console.log(j.country, j.city, j.hotel);
    }
    if (data[i].hotel.includes(string) === true) {
      console.log(j.country, j.city, j.hotel);
    }
  }
};
search(string);

const palindrome1 = () => word === word.split("").reverse().join("");
console.log(palindrome1());

console.log("---------------");

import { hotels } from "./module.js";

const hotelsInd = "USA"; //Поиск объектов размещения

const filteredHotels = hotels.filter((item) => {
  if (
    item.country === hotelsInd || // можно так
    item.city.includes(hotelsInd) === true || // можно и так
    item.name.includes(hotelsInd) === true
  ) {
    console.log(item.country, item.city, item.name);
    return `${item.country} ${item.city} ${item.name}`; // Как правильно??
    // console.log([`${item.country} ${item.city} ${item.name}`]);
    // return true; // {name: 'Hotel Leopold', city: 'Saint Petersburg', country: 'Russia'}
  }
});

console.log(filteredHotels);

console.log("---------------");
//
const uniqCountry = (hotels) => {
  return hotels.reduce((acc, hotels) => {
    if (hotels.country === "USA") {
      acc.push(hotels.city);
    }
    return acc;
  }, []);
};
console.log(uniqCountry(hotels));

console.log("---------------");
console.log(hotels[8].country === hotels[16].country);

const uniqCountry1 = (hotels) => {
  return hotels.reduce(
    (uniqCountry1, hotels) => {
      if (hotels.country === "USA") {
        uniqCountry1.USA.push(hotels.city);
      }
      if (hotels.country === "Russia") {
        uniqCountry1.Russia.push(hotels.city);
      }
      if (hotels.country === "Germany") {
        uniqCountry1.Germany.push(hotels.city);
      }
      return uniqCountry1;
    },
    {
      USA: [],
      Russia: [],
      Germany: [],
    }
  );
};
console.log(uniqCountry1(hotels));
// console.log(`${hotels[i].country}':  ${["Chicago", "Hawaii", "Miami"]} }`);

import { obj1 } from "./module.js";
import { obj2 } from "./module.js";
// import { obj3 } from "./module.js";

const properties1 = Object.getOwnPropertyNames(obj1);
const properties2 = Object.getOwnPropertyNames(obj2);
// const properties3 = Object.getOwnPropertyNames(obj3);

console.log(properties1);
console.log(properties2);
console.log(obj1[properties1[1]]);
console.log(obj2[properties2[1]]);
console.log(typeof properties1[0]);
console.log(typeof properties2[0]);

const deepEqual = (obj1, obj2) => {
  if (properties1.length !== properties2.length) {
    return false;
  }

  for (let i = 0; i < properties1.length; i++) {
    if (
      typeof properties1[i] !== "object" &&
      typeof properties2[i] !== "object" &&
      obj1[properties1[i]] !== obj1[properties2[i]]
    ) {
      return false;
    }
    if (
      typeof properties1[i] === "object" &&
      typeof properties2[i] === "object" &&
      !deepEqual(obj1[properties1[i]], obj2[properties2[i]]) // Почему не работает?
    ) {
      return false;
    }
  }
  return true;
};
console.log(deepEqual(obj1, obj2));
