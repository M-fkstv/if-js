import { hotels, obj1, obj2, obj3 } from "./module.js";

const uniqCountry2 = (hotels) => {
  // Выбирает только страны из массива hotels (функция)
  return hotels.map((hotels) => {
    return hotels.country;
  });
};
console.log(uniqCountry2(hotels));

const uniqCountry3 = hotels.map((hotels) => {
  // Выбирает только страны из массива hotels (встроенный метод)
  return hotels.country;
});

console.log(uniqCountry3);

const newHotels = uniqCountry3.filter((item, index) => {
  // удаляет повторяющиеся элементы массива uniqCountry3
  return index === uniqCountry3.indexOf(item);
});

console.log(newHotels);
// hotels.forEach((value) => console.log({ [value.country]: [value.city] }));

const uniqCountry4 = hotels.reduce((result, value, index, hotels) => {
  result[value.country] = [value.city];
  // result[value.country] += [value.city];
  // for (let i = 0; i < hotels.length; i++) {
  //
  //
  // }
  // for (let i = 0; i < uniqCountry3.length; i++) {
  // const CCC = Object.keys(uniqCountry4);
  // if (CCC.includes(uniqCountry3[0])) {
  //   console.log([value.city], uniqCountry3[0]);
  // }
  // }
  // console.log(CCC.includes(hotels[15].country));

  // console.log(`${value.country} : ${value.city} `);
  if (result[value.country].includes(hotels[index].country)) {
    [value.city].push(...hotels[index].city.split(" "));
  }

  // console.log([value.country, ...hotels[index].city.split(" ")]);
  // console.log([value.country].includes(hotels[index].country)); //true
  // result[value.country] = [...(result[value.city] || []), value.city];
  // console.log(hotels[index].country);
  // console.log([value.country]);
  return result;
}, {});
console.log(uniqCountry4);

// const deepEqual1 = (obj1, obj2) => {
//   const isObjects = typeof obj1 === "object" && typeof obj2 === "object";
//   // const notNull = obj1 !== null && obj2 !== null;
//   if (isObjects) {
//     for (const key in obj1) {
//       if (Object.hasOwn(obj1, key) === false) {
//         // проверяет есть ли ключи второго объекта в первом
//         //Object.getOwnPropertyNames(obj1).length !== Object.getOwnPropertyNames(obj2).length // по количеству ключей
//         return false;
//       }
//       if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
//         const result = deepEqual1(obj1[key], obj2[key]); // результат функции сравнения ключей объекта
//         if (result === false) return false;
//       } else {
//         if (obj1[key] !== obj2[key]) return false;
//       }
//     }
//     return true;
//   } else {
//     return obj1 === obj2;
//   }
// };
//
// console.log(deepEqual1(obj1, obj2));
// console.log(deepEqual1(obj1, obj3));
//
// console.log(Object.hasOwn(obj1, "a"));

const uniqCountry5 = hotels.map((item, index, hotels) => {
  return { [item.country]: [item.city] };
});
console.log(uniqCountry5);

const res = (hotels) => {
  const result = {};
  // for (const { city, country } of hotels) {
  //   if (!Object.hasOwn(result, country)) {
  //     result[country] = [];
  //   }
  //   result[country].push(city);
  //   // }
  //   // for (let i = 0; i < hotels.length; i++) {
  //   //   // Перезаписывает изменения hotels[i].city
  //   //   const item = hotels[i].country;
  // }
  // hotels.forEach((item) => {
  //   // Перезаписывает изменения hotels[i].city
  //   result[item.country] = item.city;
  // });

  for (const { city, country } of hotels) {
    if (!Object.keys(result).includes(country)) {
      result[country] = [];
    }
    result[country].push(city);
  }
  return result;
};
// console.log(res(hotels));

const uniqCountry6 = hotels.reduce((acc, item) => {
  // if (!Object.keys(acc).includes(item.country)) {
  //   acc[item.country] = [];
  // }
  if (!Object.hasOwn(acc, item.country)) {
    acc[item.country] = [];
  }
  acc[item.country].push(item.city);

  return acc;
}, {});
// console.log(uniqCountry6);
