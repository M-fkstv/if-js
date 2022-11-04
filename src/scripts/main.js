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
//
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

const hotelsInd = "Germany"; //Поиск объектов размещения

const filteredHotels = hotels.filter((item) => {
  if (
    item.country === hotelsInd || // можно так
    item.city.includes(hotelsInd) === true || // можно и так
    item.name.includes(hotelsInd) === true
  ) {
    // console.log([item.country, item.city, item.name]);
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
//
import { obj1 } from "./module.js";
import { obj2 } from "./module.js";
import { obj3 } from "./module.js";

const uniqCountry6 = hotels.reduce((acc, item) => {
  // if (!Object.keys(acc).includes(item.country)) {
  //   acc[item.country] = [];
  // }
  // if (!Object.hasOwn(acc, item.country)) {
  //   acc[item.country] = [];
  // }
  // acc[item.country].push(item.city);
  const result = { ...acc };

  if (!result[item.country]) {
    result[item.country] = [];
  }
  result[item.country].push(item.city);
  return result;
}, {});

console.log(uniqCountry6);

const deepEqual1 = (obj1, obj2) => {
  const isObjects = typeof obj1 === "object" && typeof obj2 === "object";
  if (isObjects) {
    for (const key in obj1) {
      if (Object.hasOwn(obj1, key) === false) return false;
      if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
        const result = deepEqual1(obj1[key], obj2[key]);
        if (result === false) return false;
      } else {
        if (obj1[key] !== obj2[key]) return false;
      }
    }

    return true;
  } else {
    return obj1 === obj2;
  }
};

console.log(deepEqual1(obj1, obj2));
console.log(deepEqual1(obj1, obj3));

const colors1 = {
  data: ["magenta", "cyan", "firebrick", "springgreen", "skyblue"],
  [Symbol.iterator]() {
    return this;
  },
  next() {
    if (this.current === undefined) {
      this.current = this.from;
    }
    if (this.current > this.to) {
      return {
        done: false,
        value: this.from,
      };
    }
  },
};

console.log(colors1.data);
for (const values of colors1.data) {
  console.log(values);
}
const changeStyle = (id) => (event) => {
  event.target.style.color = colors.next(id).value;
};

// const range = {
//   from: 1,
//   to: 5,
//   [Symbol.iterator]() {
//     return this;
//   },
//   next() {
//     if (this.current === undefined) {
//       this.current = this.from;
//     }
//     if (this.current > this.to) {
//       return {
//         done: true,
//       };
//     }
//     return {
//       done: false,
//       value: this.current++,
//     };
//   },
// };

// for (const num of range) {
//   console.log(num); // 1, 2, 3, 4, 5
// }
// console.log(Math.max(1, 2, 3, 4, 5)); // 5

const daysInMonth = 30;
const daysInWeek = 7;
const calendar = [];

const getMonth = function (daysInMonth, daysInWeek) {
  for (let i = 1; i <= daysInMonth; i++) {
    calendar.push(i);
  }

  const res = [];
  for (let i = 0; i < calendar.length; i + daysInWeek) {
    res.push(calendar.splice(0, daysInWeek));
  }
  return res;
};

console.log(getMonth(daysInMonth, daysInWeek));

// const getWeek = function (daysInWeek) {
//   const res = [];
//   for (let i = 0; i < calendar.length; i + daysInWeek) {
//     res.push(calendar.splice(0, daysInWeek));
//   }
//
//   return res;
// };
// console.log(getWeek(daysInWeek));

import { data1 } from "./module.js";

const homes = document.createElement("section");
homes.className = "homes";
homes.style.cssText = ` 
  background-color: var(--bg-color);
  padding-top: 120px;
  padding-bottom: 120px;`;
document.body.appendChild(homes);

const h2Text = document.createElement("h2");
h2Text.textContent = "Homes guests loves";
h2Text.className = "h2Text";
h2Text.style.cssText = `
position: relative;
  text-align: center;
  font-size: 40px;
  font-weight: 500;
  margin: 0 auto 110px;
  color: var(--main-text);`;
homes.appendChild(h2Text);

const homesExamples = document.createElement("div");
homesExamples.className = "homesExamples";
homesExamples.style.cssText = `
  position: relative;
  max-width: 1260px;
  gap: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 106px auto 0;`;

homes.appendChild(homesExamples);

data1.forEach((item) => {
  const homesExamplesIcons = document.createElement("div");
  homesExamplesIcons.setAttribute("id", `${item.id}`);
  homesExamplesIcons.className = "homes__examples__icons";
  homesExamplesIcons.style.cssText = `width: 20%`;
  homesExamples.appendChild(homesExamplesIcons);
  // homesExamples.innerHTML += "homesExamplesIcons";

  const homesExamplesIcon = document.createElement("img");
  homesExamplesIcon.setAttribute(
    "src",
    `${item.imageUrl}`
    // "https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg"
  );
  homesExamplesIcon.className = "homes__examples__icon";
  homesExamplesIcon.style.cssText = `width: 100%`;

  homesExamplesIcons.appendChild(homesExamplesIcon);

  const homesDescription = document.createElement("div");
  homesDescription.className = "homesDescription";
  homesDescription.style.cssText = `height: 120px`;
  homesExamplesIcons.appendChild(homesDescription);

  const homesDescriptionText = document.createElement("p");
  homesDescriptionText.className = "homesDescriptionText";
  homesDescriptionText.style.cssText = `
  margin-top: 20px;
  font-size: 24px;
  font-weight: 400;
  color: var(--general-blue);
  `;
  homesDescriptionText.innerHTML = `${item.name}`;
  homesDescription.appendChild(homesDescriptionText);

  const homesDescriptionTextLastChild = document.createElement("p");
  homesDescriptionTextLastChild.className =
    "homes__description--text:last-of-type";
  homesDescriptionTextLastChild.style.cssText = `color: #bfbfbf;     
  margin-top: 20px;                                        
  font-size: 24px;
  `;
  // <-- стили не применились из homesDescriptionText
  homesDescriptionTextLastChild.innerHTML = `${item.city}, ${item.country}`;
  homesDescriptionText.after(homesDescriptionTextLastChild);
  homesDescription.appendChild(homesDescriptionTextLastChild);
});

console.log(homes);

// const homesExamplesIcons1 = homesExamplesIcons.cloneNode(true);
// homesExamplesIcons.after(homesExamplesIcons1);
// const homesExamplesIcons2 = homesExamplesIcons.cloneNode(true);
// homesExamplesIcons1.after(homesExamplesIcons2);
// const homesExamplesIcons3 = homesExamplesIcons.cloneNode(true);
// homesExamplesIcons2.after(homesExamplesIcons3);
