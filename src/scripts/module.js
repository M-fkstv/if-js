export function sum(n1) {
  return function sum(n2) {
    return n1 + n2;
  };
}

// let sum = (n1) => (sum = (n2) => n1 + n2);

export const colors = [
  "magenta",
  "cyan",
  "firebrick",
  "springgreen",
  "skyblue",
];
export const getColor = function () {
  let i = 0;
  return function () {
    // console.log(colors[i]);
    this.style.color = colors[i];
    i++;
    if (i === colors.length) {
      i = 0;
    }
  };
};

export const hotels = [
  {
    name: "Hotel Leopold",
    city: "Saint Petersburg",
    country: "Russia",
  },
  {
    name: "Apartment Sunshine",
    city: "Santa Cruz de Tenerife",
    country: "Spain",
  },
  {
    name: "Villa Kunerad",
    city: "Vysokie Tatry",
    country: "Slowakia",
  },
  {
    name: "Hostel Friendship",
    city: "Berlin",
    country: "Germany",
  },
  {
    name: "Radisson Blu Hotel",
    city: "Kyiv",
    country: "Ukraine",
  },
  {
    name: "Paradise Hotel",
    city: "Guadalupe",
    country: "Mexico",
  },
  {
    name: "Hotel Grindewald",
    city: "Interlaken",
    country: "Switzerland",
  },
  {
    name: "The Andaman Resort",
    city: "Port Dickson",
    country: "Malaysia",
  },
  {
    name: "Virgin Hotel",
    city: "Chicago",
    country: "USA",
  },
  {
    name: "Grand Beach Resort",
    city: "Dubai",
    country: "United Arab Emirates",
  },
  {
    name: "Shilla Stay",
    city: "Seoul",
    country: "South Korea",
  },
  {
    name: "San Firenze Suites",
    city: "Florence",
    country: "Italy",
  },
  {
    name: "The Andaman Resort",
    city: "Port Dickson",
    country: "Malaysia",
  },
  {
    name: "Black Penny Villas",
    city: "BTDC, Nuca Dua",
    country: "Indonesia",
  },
  {
    name: "Koko Hotel",
    city: "Tokyo",
    country: "Japan",
  },
  {
    name: "Ramada Plaza",
    city: "Istanbul",
    country: "Turkey",
  },
  {
    name: "Waikiki Resort Hotel",
    city: "Hawaii",
    country: "USA",
  },
  {
    name: "Puro Hotel",
    city: "Krakow",
    country: "Poland",
  },
  {
    name: "Asma Suites",
    city: "Santorini",
    country: "Greece",
  },
  {
    name: "Cityden Apartments",
    city: "Amsterdam",
    country: "Netherlands",
  },
  {
    name: "Mandarin Oriental",
    city: "Miami",
    country: "USA",
  },
  {
    name: "Concept Terrace Hotel",
    city: "Rome",
    country: "Italy",
  },
  {
    name: "Ponta Mar Hotel",
    city: "Fortaleza",
    country: "Brazil",
  },
  {
    name: "Four Seasons Hotel",
    city: "Sydney",
    country: "Australia",
  },
  {
    name: "Le Meridien",
    city: "Nice",
    country: "France",
  },
  {
    name: "Apart Neptun",
    city: "Gdansk",
    country: "Poland",
  },
  {
    name: "Lux Isla",
    city: "Ibiza",
    country: "Spain",
  },
  {
    name: "Nox Hostel",
    city: "London",
    country: "UK",
  },
  {
    name: "Leonardo Vienna",
    city: "Vienna",
    country: "Austria",
  },
  {
    name: "Adagio Aparthotel",
    city: "Edinburgh",
    country: "UK",
  },
  {
    name: "Steigenberger Hotel",
    city: "Hamburg",
    country: "Germany",
  },
];

export const obj1 = {
  a: "a",
  b: {
    a: "a",
    b: "b",
    c: {
      a: 1,
    },
  },
};
export const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: "b",
    a: "a",
  },
  a: "a",
};
export const obj3 = {
  a: {
    c: {
      a: "a",
    },
    b: "b",
    a: "a",
  },
  b: "b",
};
