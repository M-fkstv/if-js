// console.log(`${hotels[i].country}':  ${["Chicago", "Hawaii", "Miami"]} }`);
//
import { hotels, obj1, obj2, obj3, sum } from "./module.js";

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
//
// import { colors } from "./module.js";
// import { getColor } from "./module.js";

// for (let j = 0; j < colors.length; j++) {
//   text1.addEventListener("click", getColor());
// }
// for (let i = 0; i < colors.length; i++) {
//   text2.addEventListener("click", getColor());
// }
// for (let i = 0; i < colors.length; i++) {
//   text3.addEventListener("click", getColor());
// }

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
  current: 0, // без этого не работает 'this.current'

  [Symbol.iterator]() {
    return this;
  },

  next() {
    // const current = 0;
    // debugger;
    if (this.data[this.current] === undefined) {
      this.data[this.current] = this.data[0];
    }

    if (this.current > this.data.length) {
      return {
        done: false,
        value: this.data[0],
      };
    }

    return {
      done: false,
      value: this.data[this.current++],
    };
  },
};
console.log(colors1.next());
console.log(colors1.next());
console.log(colors1.next());
console.log(colors1.next());
console.log(colors1.next());

for (const values of colors1.data) {
  console.log(values);
}
const changeStyle = (id) => (event) => {
  event.target.style.color = colors1.next(id).value;
};
text1.addEventListener("click", changeStyle(text1)); // НЕ МЕНЯЕТ ЦВЕТ!!!!!!!!
text2.addEventListener("click", changeStyle(text2));
text3.addEventListener("click", changeStyle(text3));

const daysInMonth = 30;
const daysInWeek = 7;
const calendar = [];

const getMonth = function (daysInMonth, daysInWeek) {
  for (let i = 1; i <= daysInMonth; i++) {
    // Собирает массив
    calendar.push(i);
  }

  const res = [];
  for (let i = 0; i < calendar.length; i + daysInWeek) {
    res.push(calendar.splice(0, daysInWeek)); // Разбивает на недели
  }
  return res;
};

console.log(getMonth(daysInMonth, daysInWeek));

// listeners

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const output = document.querySelector(".output");
const countdown = document.querySelector(".countdown");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const btn = document.querySelectorAll(".btn");

btn.forEach((item) => {
  item.style.cssText = `
    height: 50px;
    width: 150px;
    margin: 10px;
    border: 1px, solid, #FFFFFF;
    color: black;    
`;
});
plus.addEventListener("click", () => {
  let click = output.textContent;
  click++;
  output.textContent = click;
});
minus.addEventListener("click", () => {
  let click = output.textContent;
  click--;
  output.textContent = click;
});

// по клику
let timerId;

function startCountdown() {
  // ускоряется и не останавливается при повторном нажатии
  // let sec = 0;
  timerId = setInterval(() => {
    // ускоряется и не останавливается при повторном нажатии
    countdown.textContent = +countdown.textContent + 1;

    // sec++;                                // сбрасывает значение
    // countdown.textContent = sec;
  }, 100);
}

function stopCountdown() {
  clearInterval(timerId);
}

start.addEventListener("click", startCountdown);
stop.addEventListener("click", stopCountdown);

// при наведении
const s = document.getElementById("timer");

function startCountdown1() {
  timerId = setInterval(() => {
    s.textContent = +s.textContent + 1;
  }, 100);
}

function stopCountdown1() {
  clearInterval(timerId);
}

s.addEventListener("mouseover", startCountdown1);
s.addEventListener("mouseout", stopCountdown1);

let sec;
// let clear;
// function start1() {
//   sec = 0;
//   clear = setInterval(() => {
//     sec++;
//     document.getElementById("timer1").childNodes[0].textContent = +sec;
//   }, 100);
// }
//
// document.getElementById("timer1").addEventListener("click", () => {
//   start1();
// });
// document.getElementById("timer1").addEventListener("mouseleave", () => {
//   clearInterval(clear);
// });

// Секундомер из интернета для примера
//изначальные переменные
let min;
min = 0;
let hour;
hour = 0;
//Оставляем вашу функцию
function init() {
  sec = 0;
  setInterval(tick, 1000);
}

//Основная функция tick()
function tick() {
  sec++;
  if (sec >= 60) {
    //задаем числовые параметры, меняющиеся по ходу работы программы
    min++;
    sec = sec - 60;
  }
  if (min >= 60) {
    hour++;
    min = min - 60;
  }
  if (sec < 10) {
    //Визуальное оформление
    if (min < 10) {
      if (hour < 10) {
        document.getElementById("timer1").innerHTML =
          "0" + hour + ":0" + min + ":0" + sec;
      } else {
        document.getElementById("timer1").innerHTML =
          hour + ":0" + min + ":0" + sec;
      }
    } else {
      if (hour < 10) {
        document.getElementById("timer1").innerHTML =
          "0" + hour + ":" + min + ":0" + sec;
      } else {
        document.getElementById("timer1").innerHTML =
          hour + ":" + min + ":0" + sec;
      }
    }
  } else {
    if (min < 10) {
      if (hour < 10) {
        document.getElementById("timer1").innerHTML =
          "0" + hour + ":0" + min + ":" + sec;
      } else {
        document.getElementById("timer1").innerHTML =
          hour + ":0" + min + ":" + sec;
      }
    } else {
      if (hour < 10) {
        document.getElementById("timer1").innerHTML =
          "0" + hour + ":" + min + ":" + sec;
      } else {
        document.getElementById("timer1").innerHTML =
          hour + ":" + min + ":" + sec;
      }
    }
  }
}
document.querySelector(".timer1-start").addEventListener("click", () => {
  init();
});

document.querySelector(".timer1-stop").addEventListener("click", () => {
  clearInterval(tick); // не работает
});
